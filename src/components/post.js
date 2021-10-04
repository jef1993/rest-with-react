import React from "react";

export const Post = ({ title, content, onDelete }) => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__title">{title}</div>
        <div
          className="post__delete"
          onClick={(e) => {
            onDelete();
            // e.target.closest(".post").remove();
          }}
        >
          <div>&#10006;</div>
        </div>
      </div>
      <div className="post__content">{content}</div>
    </div>
  );
};

// export default Post;
