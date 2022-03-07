import React from "react";
import ProfileStatus from './ProfileStatus'
import {connect} from "react-redux";

class ProfileStatusContainer extends React.Component {

  state = {
    isEditMode: false
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


  render () {

    return <ProfileStatus
      isEditMode={this.state.isEditMode}
      profileStatus={'erik'}
      enableEditMode={this.enableEditMode}
      disableEditMode={this.disableEditMode}

    />
  }
}

const mapStateToProps = (state) => ({})

export default connect (mapStateToProps) (ProfileStatusContainer)