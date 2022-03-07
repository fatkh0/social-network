import React from "react";
import Auth from "./Auth";
import {connect} from "react-redux";
import authReducer, {authUser} from "../../../redux/auth-reducer";

class AuthContainer extends React.Component {

  componentDidMount() {
    this.props.authUser()
  }


  render() {
    return (
      <Auth isLogIn={this.props.isLogIn} login={this.props.login} />
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
  authUser
}) (AuthContainer)
