import React from "react";
import ChatContainer from "./chat/ChatContainer";
import DialogsContainer from "./dialogs/DialogsContainer";
import s from "./Messages.module.sass"

const Messages = () => {

  return (
    <div className={s.messages}>
      <DialogsContainer />
      <ChatContainer/>
    </div>
  );
};

export default Messages
