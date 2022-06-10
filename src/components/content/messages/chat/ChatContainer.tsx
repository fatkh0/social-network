import React from "react";
import Chat from "./Chat.tsx";
import {connect} from "react-redux";
import { getMessagesPageMessages } from "../../../../utils/selectors/selectors.ts";


const ChatContainer = (props) => {

  return <Chat {...props} />
}


const mapStateToProps = (state) => ({
  messages: getMessagesPageMessages(state)
})


export default connect (mapStateToProps, {}) (ChatContainer)


