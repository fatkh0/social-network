import React from "react";
import {connect} from "react-redux";
import {sendMessage} from "../../../../../redux/messages-reduser/messages-reducer.ts";
import PostInputForm from '../../../profile/MyPosts/PostInput/PostInputForm.tsx'


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
  
})

export default connect (mapSateToProps, {sendMessage}) (ChatInputContainer)

