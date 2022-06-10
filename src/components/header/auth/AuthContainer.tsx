import React, {useEffect} from "react";
import Auth from "./Auth.tsx";
import {connect} from "react-redux";
import {checkAuthUser, logOut} from "../../../redux/auth-reducer/auth-reducer.ts";
import {getIsLogIn, getUserPhoto, getIsAuthFetching, getAuthLogin} from '../../../utils/selectors/selectors.ts'



const AuthContainer = (props) => {

  useEffect(() => {
    props.checkAuthUser()
  }, [])

  return <Auth {...props}  />
}



const mapStateToProps = (state) => ({
  isLogIn: getIsLogIn(state),
  userPhoto: getUserPhoto(state),
  isFetching: getIsAuthFetching(state),
  login: getAuthLogin(state)
})



export default connect (mapStateToProps, {
  checkAuthUser,
  logOut
}) (AuthContainer)
