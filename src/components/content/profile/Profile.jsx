import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.sass"
import Avatar from "../../common/avatar/Avatar";
import userPhoto from '../../../assets/images/user-photo.png'
import ProfileStatusContainer from './ProfileInfo/ProfileStatusContainer'

const Profile = (props) => {

  const user = props.userInfo

  const avatar = user.photos.large ?? userPhoto


  const getUserInfo = () => props.filter((data) => data !== null)

  const getContacts = () => props.contacts.filter(contact => contact !== null)


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




  return (
    <div className={s.profile}>
      <div className={s.profile_bunner}></div>
      <div className={s.profile_info}>
          <Avatar height={250} width={250} url={avatar} />
        <div className={s.profile_info_description}>

          <ProfileStatusContainer />

          <div>
            fullname: {user.fullName}
          </div>

          <div>
            aboutMe: {user.aboutMe}
          </div>

          <div>
            lookingForAJob: {user.lookingForAJob + ''}
          </div>

          <div>
            lookingForAJobDescription: {user.lookingForAJobDescription}
          </div>

          <div>
            contacts
            <div>
              facebook: {user.contacts.facebook}
            </div>
            <div>
              github: {user.contacts.github}
            </div>
            <div>
              instagram: {user.contacts.instagram}
            </div>
            <div>
              mainLink: {user.contacts.mainLink}
            </div>
            <div>
              twitter: {user.contacts.twitter}
            </div>
            <div>
              vk: {user.contacts.vk}
            </div>
            <div>
              website: {user.contacts.website}
            </div>
            <div>
              youtube: {user.contacts.youtube}
            </div>
          </div>

        </div>
      </div>
      <MyPostsContainer/>
    </div>
  );
};

export default Profile
