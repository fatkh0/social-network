import React from "react";
import MyPosts from "./MyPosts.tsx";
import {connect} from "react-redux";
import { getProfilePostData } from "../../../../utils/selectors/selectors.ts";

const mapStateToProps = (state) => ({
  postData: getProfilePostData(state)
})

const mapDispatchToProps = (dispatch) => ({})

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer
