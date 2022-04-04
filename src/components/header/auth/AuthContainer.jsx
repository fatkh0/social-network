import React, {useEffect} from "react";
import Auth from "./Auth";
import {connect} from "react-redux";
import {checkAuthUser, logOut} from "../../../redux/auth-reducer";
import {getIsLogIn, getUserPhoto, getIsAuthFetching, getAuthLogin} from '../../../utils/selectors/selectors'



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
