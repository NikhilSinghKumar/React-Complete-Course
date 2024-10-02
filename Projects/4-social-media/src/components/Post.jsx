/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";

function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p>{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          <span className="reactions-icons">
            <BiSolidLike /> {post.reactions.likes}
          </span>{" "}
          <span className="reactions-icons">
            <BiSolidDislike /> {post.reactions.dislikes}
          </span>{" "}
          <span className="reactions-icons">
            <IoEyeSharp />
            {post.views}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Post;
