import React from "react";

const ProfileStatus = (props) => {

  return (
    <div>
      {
        !props.isEditMode &&
        <span onDoubleClick={props.enableEditMode} >{props.profileStatus}</span>
      }
      {
        props.isEditMode &&
        <input onBlur={props.disableEditMode} autoFocus={true} value={props.profileStatus} />
      }

    </div>
  )
}

export default ProfileStatus