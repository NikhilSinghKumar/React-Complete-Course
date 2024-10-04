/* eslint-disable react/prop-types */
import {
  createContext,
  useReducer,
  useCallback,
  useState,
  useEffect,
} from "react";

export const PostList = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

function postListReducer(currentPostList, action) {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
}

function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);

  function addPost(post) {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  }

  function addInitialPosts(posts) {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts: posts,
      },
    });
  }

  // useCallback -repaint cycle optimization

  const deleteThePost = useCallback(
    function deletePost(postId) {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList]
  );

  useEffect(() => {
    setFetching(true);
    // Advanced useEffect
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts/", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    // useEffect clean up
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider
      value={{
        postList: postList,
        fetching: fetching,
        addPost: addPost,
        deletePost: deleteThePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
}

export default PostListProvider;
