import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { Input } from "../common/formControl/FormControl";
import { required } from "../../utils/validators/validators";
import { makeStyles } from "@material-ui/styles";

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
  }
})

const LoginForm = (props) => {
  const styles = useStyles()
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field 
        validate={[required]}  
        name="login" 
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
          <Field id={'rememberMe'} name="rememberMe" type={'checkbox'} component={'input'} /> 
          <label htmlFor={'rememberMe'}>Remember me</label>
        </div>
        
      </div>
      
      
    </form>
  )
}

export default reduxForm({
  form: 'login'
})(LoginForm)