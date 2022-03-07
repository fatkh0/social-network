import React from "react";
import ChatInput from "./ChatInput";
import {connect} from "react-redux";
import {updateCurrentText, sendMessage} from "../../../../../redux/messages-reducer";


const mapSateToProps = (state) => ({
  currentText: state.messagesPage.newMessageText
})


const ChatInputContainer = connect (mapSateToProps, {
  updateCurrentText,
  sendMessage
}) (ChatInput)

export default ChatInputContainer