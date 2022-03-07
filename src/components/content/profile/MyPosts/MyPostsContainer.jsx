import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  postData: state.profilePage.postData
})

const mapDispatchToProps = (dispatch) => ({})

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer
