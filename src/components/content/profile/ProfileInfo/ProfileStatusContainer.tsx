import React, {useState, useEffect} from "react";
import ProfileStatus from './ProfileStatus.tsx'
import {connect} from "react-redux";
import { updateStatus, getStatus } from "../../../../redux/profile-reducer/profile-reducer.ts";
import { getProfileStatus, getProfileUserId } from '../../../../utils/selectors/selectors.ts'


const ProfileStatusContainer = (props) => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState('')


  useEffect (() => {
    props.getStatus(props.userId)
  }, [props.userId])
 
  useEffect(() => {
    setStatus(props.status)
  }, [props.status])




  const setLocalStatus = (newStatus) => {
    setStatus (newStatus)
    
  }

  const updateStatus = () => {
    disableEditMode()
    props.updateStatus(status)
  }

  const enableEditMode = () => {
    setEditMode(true)
  }

  const disableEditMode = () => {
    setEditMode(false)
  }

  return <ProfileStatus
      isEditMode={editMode}
      profileStatus={props.status}
      enableEditMode={enableEditMode}
      disableEditMode={disableEditMode}
      updateStatus={updateStatus}
      setStatus={setLocalStatus}
      localStatus={status}
    />
}

const mapStateToProps = (state) => ({
  status: getProfileStatus(state),
  userId: getProfileUserId(state)
})

export default connect (mapStateToProps, {updateStatus, getStatus}) (ProfileStatusContainer)


