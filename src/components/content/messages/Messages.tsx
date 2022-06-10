import React from "react";
import ChatContainer from "./chat/ChatContainer.tsx";
import DialogsContainer from "./dialogs/DialogsContainer.tsx";
import s from "./Messages.module.sass"

const Messages = React.memo(() => {

  return (
    <div className={s.messages}>
      <DialogsContainer />
      <ChatContainer/>
    </div>
  );
})

export default Messages
