import React from "react";
import s from "./PostInput.module.sass"


const PostInput = (props) => {

  const message = React.createRef()

  const onAddText = () => {
    props.addText()
  }

  const updateCurrentText = () => {
    const text = message.current.value
    props.updateCurrentText(text)

  }


  return (
    <div className={s.input}>
      <textarea onChange={updateCurrentText} ref={message} value={props.newPostText}></textarea>
      <button onClick={ onAddText }>Add Post</button>
    </div>
  )
}

export default PostInput