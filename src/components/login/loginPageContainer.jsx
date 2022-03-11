import React from 'react'
import {connect} from "react-redux";
import LoginPage from "./LoginPage";
import { logInToApp } from '../../redux/auth-reducer'
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class LoginPageContainer extends React.Component {

  onSubmit = (formData) => {
    const { login, password, rememberMe } = formData

    this.props.logInToApp(login, password, rememberMe)
    this.props.history.push('profile')

  }


  render () {
    return <LoginPage onSubmit={this.onSubmit} {...this.props} />
  }
}

const mapStateToProps = (state) => ({

})

export default compose (
  withRouter,
  connect (mapStateToProps, {logInToApp})
  ) (LoginPageContainer)
