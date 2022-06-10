import React from "react";
import s from "./Avatar.module.sass"

type PropsType = {
  url: string
  width: string
  height: string
}
const Avatar: React.FC<PropsType> = React.memo( ({url, width, height}) => {
  const styles = {
    backgroundImage: `url(${url})`,
    height,
    width
  }

  return (
    <div style={styles} className={s.avatar}></div>
  )
})
export default Avatar