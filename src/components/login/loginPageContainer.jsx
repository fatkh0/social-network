import React from 'react'
import {connect} from "react-redux";
import LoginPage from "./LoginPage";
import { logInToApp } from '../../redux/auth-reducer'
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';


const LoginPageContainer = (props) => {

  const onSubmit = (formData) => {
    const { login, password, rememberMe } = formData

    props.logInToApp(login, password, rememberMe)
    props.history.push('profile')
  }

    return <LoginPage onSubmit={onSubmit} {...props} />
}


const mapStateToProps = (state) => ({

})

export default compose (
  withRouter,
  connect (mapStateToProps, {logInToApp})
  ) (LoginPageContainer)
