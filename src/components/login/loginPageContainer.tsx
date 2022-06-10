import React from 'react'
import {connect} from "react-redux";
import LoginPage from "./LoginPage.tsx";
import { logInToApp } from '../../redux/auth-reducer/auth-reducer.ts'
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';
import { getIsLogIn } from '../../utils/selectors/selectors.ts';
import { ILoginForm } from '../../types/types';

type TRouter = {
  history: Array<string>
}

const LoginPageContainer: React.FC<TMapStateProps & TMapDispatchProps & TRouter> = (props) => {

  const onSubmit = (formData) => {
    const { email, password, rememberMe }: ILoginForm = formData


    props.logInToApp(email, password, rememberMe)
    props.history.push('profile')
  }

    return <LoginPage onSubmit={onSubmit} {...props} />
}

type TMapStateProps = {
  isAuth: boolean
}

const mapStateToProps = (state: AppStateType): TMapStateProps => ({
  isAuth: getIsLogIn(state)
})

type TMapDispatchProps = {
  logInToApp: (login: string, password: string, rememberMe: boolean) => void
}

export default compose (
  withRouter,
  connect (mapStateToProps, {logInToApp})
  ) (LoginPageContainer)
