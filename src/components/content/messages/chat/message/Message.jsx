import React from "react";
import s from "./Message.module.sass"

const Message = (props) => {

  const directionOut = 0

  const direction = props.direction === directionOut ? 'end' : 'start'

  const position = {justifyContent: direction}

  return (
    <div className={s.message} style={position}>
      <span className={props.direction === directionOut ? s.out : s.in}>{props.message}</span>
    </div>
)
  ;
};

export default Message
