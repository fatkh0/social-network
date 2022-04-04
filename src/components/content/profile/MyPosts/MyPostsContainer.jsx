import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import { getProfilePostData } from "../../../../utils/selectors/selectors";

const mapStateToProps = (state) => ({
  postData: getProfilePostData(state)
})

const mapDispatchToProps = (dispatch) => ({})

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer
