import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import s from "./PostInput.module.sass"



const PostInputForm = React.memo((props) => {
  return (
    <form className={s.input} onSubmit={props.handleSubmit}>
      <Field component='textarea' name="newPostText" placeholder="New post"/>
      <button>Add Post</button>
    </form>
  )
})
export default reduxForm({form: 'profilePostForm'})(PostInputForm)

