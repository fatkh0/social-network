import React from "react";
import s from "./Chat.module.sass"
import Message from "./message/Message";
import ChatInputContainer from "./ChatInput/ChatInputContainer";



const Chat = (props) => {

  const messagesComponent = props.messages.map(t => <Message key={t.id} direction={t.direction} message={t.message} />)

  return (
    <div className={s.chat}>
        <div className={s.messagesSpace}>
          {messagesComponent}
        </div>
        <ChatInputContainer/>
    </div>
  );
};

export default Chat
