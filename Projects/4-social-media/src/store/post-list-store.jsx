/* eslint-disable react/prop-types */
import { useCallback } from "react";
import { createContext, useReducer } from "react";

export const PostList = createContext({
  PostList: [],
  addPost: () => {},
  addInitialPosts: () => {},
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

  function addPost(userId, postTitle, postBody, reactions, tags) {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
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

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        addInitialPosts: addInitialPosts,
        deletePost: deleteThePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
}

export default PostListProvider;
