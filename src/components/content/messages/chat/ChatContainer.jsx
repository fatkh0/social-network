import React from "react";
import Chat from "./Chat";
import {connect} from "react-redux";
import { getMessagesPageMessages } from "../../../../utils/selectors/selectors";


const ChatContainer = (props) => {

  return <Chat {...props} />
}


const mapStateToProps = (state) => ({
  messages: getMessagesPageMessages(state)
})


export default connect (mapStateToProps, {}) (ChatContainer)


