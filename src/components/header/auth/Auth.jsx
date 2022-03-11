import React from "react";
import s from "./Auth.module.sass"
import Avatar from "../../common/avatar/Avatar";
import userPhoto from '../../../assets/images/user-photo.png'
import { NavLink } from "react-router-dom";

const Auth = (props) => {

  const showAuthIcons = () => {
    if ( props.isLogIn ) {
      return (
        <>
          <Avatar url={props.userPhoto ?? userPhoto} width={'40px'} height={'40px'} />
          <span className={s.auth_name}> {props.login} </span>
          <NavLink to={'login'} className={s.authBtn} onClick={props.logOut}> Log Out </NavLink>
        </>
    )} else {
        return (
          <>
            <NavLink to={'profile'} className={s.authBtn}> Log In </NavLink>
            <button className={s.authBtn}> Sign In </button>
          </>
      )
    }
  }

  return (
    <div className={s.auth_wrapper}>
      { showAuthIcons() }
    </div>
  );
};

export default Auth;
