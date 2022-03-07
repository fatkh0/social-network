import React from "react";
import s from "./Avatar.module.sass"

const Avatar = (props) => {
  const linkToAvatar = props.url
  const height = props.height
  const width = props.width
  const styles = {
    backgroundImage: `url(${linkToAvatar})`,
    height,
    width
  }

  return (
    <div style={styles} className={s.avatar}></div>
  )
}
export default Avatar