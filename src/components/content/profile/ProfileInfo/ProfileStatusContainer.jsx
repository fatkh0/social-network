import React from "react";
import ProfileStatus from './ProfileStatus'
import {connect} from "react-redux";
import { updateStatus, getStatus } from "../../../../redux/profile-reducer";

class ProfileStatusContainer extends React.Component {

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


  render () {
    return <ProfileStatus
      isEditMode={this.state.isEditMode}
      profileStatus={this.props.status}
      enableEditMode={this.enableEditMode}
      disableEditMode={this.disableEditMode}
      updateStatus={this.props.updateStatus}
      setStatus={this.setStatus}
      localStatus={this.state.status}
    />
  }
}

const mapStateToProps = (state) => ({
  status: state.profilePage.status,
  userId: state.profilePage.userInfo.userId
})

export default connect (mapStateToProps, {updateStatus, getStatus}) (ProfileStatusContainer)