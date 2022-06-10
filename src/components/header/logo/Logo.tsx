import React from "react";
import s from "./Logo.module.sass"
import {NavLink} from "react-router-dom";

const Logo = React.memo(() => {
  return (
        <div className={s.logo}>
          <NavLink to={'/profile'} >
            SOCIAL NETWORK
          </NavLink>
        </div>
  );
});

export default Logo;
