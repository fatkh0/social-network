import React from 'react'
import s from './LoginPage.module.sass'
import { Field } from "redux-form";
import { reduxForm, InjectedFormProps } from "redux-form";
import { Input } from "../common/formControl/FormControl.tsx";
import { required } from "../../utils/validators/validators";
import { makeStyles } from "@material-ui/styles";
import { ILoginForm } from '../../types/types';

const useStyles = makeStyles({
  loginFormBtn: {
    padding: '3px 10px',
    fontSize: '20px', 
    background: '#fff',
    border: '1px solid #222',
    borderRadius: '5px',
    color: '#222',
    cursor: 'pointer',
    marginRight: '20px',
    textDecoration: 'none',
    fontWeight: 'bold',
    '&:hover': {
      background: '#222',
      color: '#fff',
    }
  },
  rememberMe: {
    color: '#222',
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    '& input': {
      width: '16px',
      height: '16px',
      marginRight: '7px'
    }
  },
  btnWrapper: {
    display: 'flex'
  },
  errorMessage: {
    paddingTop: '20px',
    fontSize: '20px',
    color: 'red'
  },
  checkbox: {
    cursor: 'pointer'
  }
})


const LoginForm: React.FC<InjectedFormProps<ILoginForm>> = React.memo((props) => {
  const styles = useStyles()
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field 
        validate={[required]}  
        name="email" 
        type={'email'} 
        component={Input} />
      </div>
      <div>
        <Field 
        validate={[required]}  
        placeholder="Password" 
        name="password" 
        type={'password'} 
        component={Input}  />
      </div>
      <div className={styles.btnWrapper}>
          <button className={styles.loginFormBtn} type={'submit'}>LOG IN</button>
        <div className={styles.rememberMe}>
          <Field id={'rememberMe'} name="rememberMe" className={styles.checkbox} type={'checkbox'} component={'input'} />
          <label htmlFor={'rememberMe'}>Remember me</label>
        </div>
        
      </div>

      {props.error && <div className={styles.errorMessage}>{props.error}</div>}
      
      
    </form>
  )
})

const LoginFormContainer =  reduxForm({
  form: 'login'
})(LoginForm)





interface ILoginPage {
  onSubmit: (formData: ILoginForm) => void
}

const LoginPage: React.FC<ILoginPage> = (props) => {

  return (
    <div className={s.login_wrapper}>
      <div className={s.login_box}>
        <LoginFormContainer onSubmit={props.onSubmit} />
      </div>

    </div>
  )
}

export default LoginPage