import React from 'react'
import {connect} from "react-redux";
import LoginPage from "./LoginPage";
import { logInToApp } from '../../redux/auth-reducer'

class LoginPageContainer extends React.Component {

  onSubmit = (formData) => {
    const { login, password, rememberMe } = formData

    this.props.logInToApp(login, password, rememberMe)

  }


  render () {
    return <LoginPage onSubmit={this.onSubmit} />
  }
}

const mapStateToProps = (state) => ({

})

export default connect (mapStateToProps, {
  logInToApp
}) (LoginPageContainer)

