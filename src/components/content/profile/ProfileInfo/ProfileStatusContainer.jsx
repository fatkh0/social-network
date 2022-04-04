import React, {useState, useEffect} from "react";
import ProfileStatus from './ProfileStatus'
import {connect} from "react-redux";
import { updateStatus, getStatus } from "../../../../redux/profile-reducer";
import { getProfileStatus, getUserId } from '../../../../utils/selectors/selectors'


const ProfileStatusContainer = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect (() => {
    this.props.getStatus(this.props.userId)
  }, [])

  useEffect ((prevProps, prevState) => {

    debugger
    if (prevProps.status !== this.props.status) {
      this.setStatus(this.props.status)
    }
  })


  return <ProfileStatus
      isEditMode={state.isEditMode}
      profileStatus={props.status}
      enableEditMode={enableEditMode}
      disableEditMode={disableEditMode}
      updateStatus={props.updateStatus}
      setStatus={setStatus}
      localStatus={state.status}
    />
}

class ProfileStatusContainer1 extends React.Component {

  state = {
    isEditMode: false,
    status: this.props.status
  }

  componentDidMount = () => {
    this.props.getStatus(this.props.userId)
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.status !== this.props.status) {
      this.setStatus(this.props.status)
    }
  }

  enableEditMode = () => {
    this.setState({
      isEditMode: true
    })
  }

  disableEditMode = () => {
    this.setState({
      isEditMode: false
    })
  }

  setStatus = (newStatus) => {
    this.setState({
      status: newStatus
    })
  }



}



const mapStateToProps = (state) => ({
  status: getProfileStatus(state),
  userId: getUserId(state)
})

export default connect (mapStateToProps, {updateStatus, getStatus}) (ProfileStatusContainer)