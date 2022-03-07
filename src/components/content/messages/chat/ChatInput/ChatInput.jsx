import React from "react";
import s from "./ChatInput.module.sass"


const ChatInput = (props) => {

  const message = React.createRef()


  const onAddText = () => {
    props.sendMessage()

  }

  const updateCurrentText = () => {
    const text = message.current.value
    props.updateCurrentText(text)

  }

  return (
    <div className={s.input}>
      <textarea onChange={updateCurrentText} ref={message} value={props.currentText}></textarea>
      <button onClick={ onAddText }>Send</button>
    </div>
  )
}

export default ChatInput