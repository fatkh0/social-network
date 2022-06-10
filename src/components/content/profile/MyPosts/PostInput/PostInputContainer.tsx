import React from "react";
import PostInputForm from "./PostInputForm.tsx";
import {connect} from "react-redux";
import {addPost} from "../../../../../redux/profile-reducer/profile-reducer.ts";



const PostInputContainer = (props) => {

  const onSubmit = (formData) => {
    props.addPost(formData.newPostText)
  }


  return <PostInputForm onSubmit={onSubmit} />
}

const mapSateToProps = () => ({})


export default connect(mapSateToProps, {addPost}) (PostInputContainer)