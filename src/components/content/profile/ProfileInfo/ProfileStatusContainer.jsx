import React, {useState, useEffect} from "react";
import ProfileStatus from './ProfileStatus'
import {connect} from "react-redux";
import { updateStatus, getStatus } from "../../../../redux/profile-reducer";
import { getProfileStatus, getUserId } from '../../../../utils/selectors/selectors'


const ProfileStatusContainer = (props) => {

  
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState('')

 
  useEffect(() => {
    console.log('render')
    props.getStatus(props.userId)
    if (status !== props.status) {
      setStatus(props.status)
    }
  }, [])




  const setLocalStatus = (newStatus) => {
    setStatus (newStatus)
    
  }

  const updateStatus = () => {
    disableEditMode()
    props.updateStatus(props.localStatus)
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

class ProfileStatusContainer1 extends React.Component {

  state = {
    isEditMode: false,
    status: this.props.status
  }

  componentDidMount = () => {
    debugger
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

  render () {
    return <ProfileStatus
      isEditMode={this.isEditMode}
      profileStatus={this.status}
      enableEditMode={this.enableEditMode}
      disableEditMode={this.disableEditMode}
      updateStatus={this.props.updateStatus}
      setStatus={this.setStatus}
      localStatus={this.status}
    />
  }

}



const mapStateToProps = (state) => ({
  status: getProfileStatus(state),
  userId: getUserId(state)
})

export default connect (mapStateToProps, {updateStatus, getStatus}) (ProfileStatusContainer)