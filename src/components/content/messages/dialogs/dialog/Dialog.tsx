import React from "react";
import Avatar from "../../../../common/avatar/Avatar.tsx";
import s from "./Dialog.module.sass";
import {NavLink} from "react-router-dom";

const Dialog = React.memo((props) => {
  const url =
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/96be2232163929.567197ac6fb64.png";
  return (
    <div className={s.dialog}>
      <Avatar height="40px" width="40px" url={url} />
      <NavLink to={`/messages/${props.id}`} className={s.dialog_name}>{props.name}</NavLink>
      
    </div>
  );
})

export default Dialog;
