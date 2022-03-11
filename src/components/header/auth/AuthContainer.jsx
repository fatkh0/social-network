import React from "react";
import Auth from "./Auth";
import {connect} from "react-redux";
import {checkAuthUser, logOut} from "../../../redux/auth-reducer";

class AuthContainer extends React.Component {

  componentDidMount() {
    this.props.checkAuthUser()
  }


  render() {
    return (
      <Auth {...this.props}  />
    );
  }
}

const mapStateToProps = (state) => ({
  isLogIn: state.auth.isLogIn,
  userPhoto: state.profilePage.avatar,
  isFetching: state.auth.isFetching,
  login: state.auth.login
})



export default connect (mapStateToProps, {
  checkAuthUser,
  logOut
}) (AuthContainer)
