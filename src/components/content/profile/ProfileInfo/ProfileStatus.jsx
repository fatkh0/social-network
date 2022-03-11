import React from "react";

const ProfileStatus = (props) => {

  const setStatus = (e) => {
    props.setStatus(e.currentTarget.value)
  }

  const updateStatus = () => {
    props.disableEditMode()
    props.updateStatus(props.localStatus)
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
        onBlur={updateStatus} 
        autoFocus={true} 
        value={props.localStatus} 
        />
      }

    </div>
  )
}

export default ProfileStatus