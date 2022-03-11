import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="Login" name="login" type={'email'} component={'input'} />
      </div>
      <div>
        <Field placeholder="Password" name="password" type={'password'} component={'input'} />
      </div>
      <div>
        <Field id={'rememberMe'} name="rememberMe" type={'checkbox'} component={'input'} /> 
        <label htmlFor={'rememberMe'}>remember me</label>
      </div>
      <div>
        <button type={'submit'}>Submit</button>
      </div>
      
    </form>
  )
}

export default reduxForm({
  form: 'login'
})(LoginForm)