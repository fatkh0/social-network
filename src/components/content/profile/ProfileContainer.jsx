import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import Preloader from "../../common/preloader/Preloader";
import {setCurrentUserId, setUserPage} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import { getProfileIsFetching, getProfileUserInfo, getCurrentUserId } from '../../../utils/selectors/selectors'


const ProfileContainer = (props) => {

  useEffect(() => {
    let userId = this.props.currentUserId
    if (!userId) {
      userId = this.props.match.params.id

      this.props.setCurrentUserId(userId)
    }
    this.props.setUserPage(userId)
  }, [])

  const getDescription =  (searchingData) => {
    const descriptions = {
      fullName: 'Full Name',
      aboutMe: 'About Me',
      lookingForAJob: 'Looking for a job',
      lookingForAJobDescription: 'Looking For A Description',
      facebook: 'facebook',
      github: 'github',
      instagram: 'instagram',
      mainLink: 'Main Link',
      twitter: 'twitter',
      vk: 'vk',
      website: 'website',
      youtube: 'youtube'
    }
    return descriptions[searchingData]
  }

  return (!props.userInfo) 
  ? <Preloader /> 
  : <Profile status={props.status} getDescription={getDescription} userInfo={props.userInfo} />
}

    /*
    fullname: voodi
    aboutMe:
    lookingForAJob: false
    lookingForAJobDescription:
    contacts
    facebook:
    github:
    instagram:
    mainLink:
    twitter:
    vk:
    website:
    youtube:
  */




const mapStateToProps = (state) => ({
  isFetching: getProfileIsFetching(state),
  userInfo: getProfileUserInfo(state),
  currentUserId: getCurrentUserId(state)
})



export default compose (
  withRouter,
  connect (mapStateToProps, {setUserPage, setCurrentUserId}),

) (ProfileContainer)



