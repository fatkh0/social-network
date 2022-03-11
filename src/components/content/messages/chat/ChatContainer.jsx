import React from "react";
import Chat from "./Chat";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  const messagesPage = state.messagesPage
  return {
    messages: messagesPage.messages,
    currentText: messagesPage.newMessage
  }
}


const ChatContainer = connect (mapStateToProps, {}) (Chat)

export default ChatContainer
