import React from "react";

const ProfileStatus = (props) => {

  const setStatus = (e) => {
    props.setStatus(e.currentTarget.value)
  }

  

  return (
    <div>
      {
        !props.isEditMode &&
        <span onDoubleClick={props.enableEditMode} >{props.profileStatus  || 'status'}</span>
      }
      {
        props.isEditMode &&
        <input 
        onChange={setStatus} 
        onBlur={props.updateStatus} 
        autoFocus={true} 
        value={props.localStatus} 
        />
      }

    </div>
  )
}

export default ProfileStatus