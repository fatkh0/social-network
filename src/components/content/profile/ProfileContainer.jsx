import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import Preloader from "../../common/preloader/Preloader";
import {setCurrentUserId, setUserPage} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";



class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.currentUserId
    if (!userId) {
      userId = this.props.match.params.id

      this.props.setCurrentUserId(userId)
    }
    this.props.setUserPage(userId)
  }



  render () {
    if (!this.props.userInfo) {
      return <Preloader />
    }

    return <Profile userInfo={this.props.userInfo} />
  }

}

const mapStateToProps = (state) => {
  const profilePage = state.profilePage
  return {
    isFetching: profilePage.isFetching,
    userInfo: profilePage.userInfo,
    currentUserId: profilePage.currentUserId
  }
}


export default compose (
  withRouter,
  connect (mapStateToProps, {setUserPage, setCurrentUserId}),

) (ProfileContainer)



