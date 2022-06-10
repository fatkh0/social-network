import React from "react";
import s from "./MyPosts.module.sass"
import Post from "./Post/Post.tsx";
import PostInputContainer from "./PostInput/PostInputContainer.tsx";

const MyPosts = (props) => {

  const postComponent = props.postData.map(t => <Post key={t.id} postText={t.postText} likeCount={t.likeCount} />)

  const reversePostsArray = postComponent.reverse()

  return (
      <div className={s.posts}>
        My posts
        <PostInputContainer/>
        {reversePostsArray}
      </div>
  );
};

export default MyPosts
