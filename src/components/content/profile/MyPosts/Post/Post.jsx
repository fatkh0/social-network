import React from "react";
import s from "./Post.module.sass"
import Avatar from "../../../../common/avatar/Avatar";

const Post = (props) => {

  return (
      <div className={s.post}>
        <Avatar height='50px' width='50px' url='https://mir-s3-cdn-cf.behance.net/project_modules/disp/96be2232163929.567197ac6fb64.png' />
        <div className={s.post_body}>
          <span className={s.postText}>
            {props.postText}
          </span>
          <div className={s.likeCount}>likes: {props.likeCount}</div>
        </div>
      </div>
  );
};

export default Post
