import React from 'react'
import LoginForm from './LoginForm'
import s from './LoginPage.module.sass'


const LoginPage = (props) => {


  return (
    <div className={s.login_wrapper}>
      <div className={s.login_box}>
        <LoginForm onSubmit={props.onSubmit} />
      </div>

    </div>
  )
}

export default LoginPage