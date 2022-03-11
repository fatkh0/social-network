import React from "react";
import {connect} from "react-redux";
import {sendMessage} from "../../../../../redux/messages-reducer";
import PostInputForm from '../../../profile/MyPosts/PostInput/PostInputForm'


const ChatInputContainer = (props) => {

  const onSubmit = (formData) => {
    const message = formData.newPostText
    if (message.length) {
      props.sendMessage(message)
    }

  }

  return <PostInputForm onSubmit={onSubmit} />
}

const mapSateToProps = (state) => ({
  currentText: state.messagesPage.newMessageText
})

export default connect (mapSateToProps, {sendMessage}) (ChatInputContainer)

