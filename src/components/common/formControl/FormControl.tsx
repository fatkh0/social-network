import React from 'react'
import {makeStyles} from '@material-ui/core'
import {WrapperedFieldProps} from 'redux-form'

const useStyles = makeStyles({
  loginInput: {
    padding: '3px',
    fontSize: '20px',
    width: '350px',
    marginBottom: '10px',
    border: '1px solid #222'
  },
  errorInput: {
    border: '2px solid red',
    color: 'red',
  },
  errorText: {
    color: 'red'
  }
})



export const Input: React.FC<WrapperedFieldProps> = React.memo( ({input, meta, ...props}) => {
  const styles = useStyles()
  const error = meta.error && meta.touched
  return (
    <div >
      <input {...input}
      placeholder={'Login'} 
      {...props} className={`${styles.loginInput} ${error ? styles.errorInput : null}`} />
    </div>
  ) 
})