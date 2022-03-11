import React from "react";
import s from "./Auth.module.sass"
import Avatar from "../../common/avatar/Avatar";
import userPhoto from '../../../assets/images/user-photo.png'

const Auth = (props) => {

  const showAuthIcons = () => {
    if ( props.isLogIn ) {
      return (
        <>
          <Avatar url={props.userPhoto ?? userPhoto} width={'40px'} height={'40px'} />
          <span className={s.auth_name}> {props.login} </span>
          <button onClick={props.logOut}> Log Out </button>
        </>
    )} else {
        return (
          <>
            <button > Log In </button>
            <button > Sign In </button>
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
