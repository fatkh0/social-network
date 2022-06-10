import React from "react";
import { Field } from "redux-form";
import s from "./ChatInput.module.sass"

const ChatInputForm = React.memo((props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.input}>
      <Field component='textarea' />
      <button onClick={ props.onAddText }>Send</button>
    </form>
  )
})

const ChatInput = React.memo((props) => {

  const message = React.createRef()


  const onAddText = () => {
    props.sendMessage()

  }

  const updateCurrentText = () => {
    const text = message.current.value
    props.updateCurrentText(text)

  }
  return <ChatInputForm onAddText={onAddText} />

})

export default ChatInput