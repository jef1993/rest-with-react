import React from "react";
import { Post } from "./post";
// import { deletePost } from "../utils/index";

export const Posts = ({ username, posts, searchChange, deleteTarget }) => {
  // const deleteNote = (id) => {
  //   deletePost(id);
  // };

  return (
    <div className="posts">
      <div className="banner">
        <div className="banner__message">
          Welcome back, <span>{username}</span>
        </div>
        <input
          type="text"
          className="form__input banner__search"
          placeholder="Search"
          onChange={(e) => {
            searchChange(e.target.value);
          }}
        ></input>
      </div>
      <div className="area">
        {posts !== ""
          ? posts.map((obj, i) => {
              return (
                <Post
                  key={i}
                  title={obj.title}
                  content={obj.content}
                  onDelete={() => {
                    // deleteNote(obj._id);
                    deleteTarget(obj._id);
                  }}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
};
