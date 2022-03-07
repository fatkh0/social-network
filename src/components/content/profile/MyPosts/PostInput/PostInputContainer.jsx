import React from "react";
import PostInput from "./PostInput";
import {connect} from "react-redux";
import {updateCurrentPostActionCreator, addPostActionCreator} from "../../../../../redux/profile-reducer";


const mapSateToProps1 = (state) => ({
  newPostText: state.profilePage.newPostText,
})

const mapSateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentText: (text) => { dispatch (updateCurrentPostActionCreator (text))},
    addText: () => { dispatch (addPostActionCreator())}
  }
}

const PostInputContainer = connect (mapSateToProps, mapDispatchToProps) (PostInput)

export default PostInputContainer