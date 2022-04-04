import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {setCurrentUserId, setUserInfo} from "../../redux/profile-reducer";
import {usersApi} from "../../api/api";
import {selectNavbarItem} from "../../redux/navbar-reducer";
import {getUserId, getCurrentUserId, getNavbarItems} from '../../utils/selectors/selectors'



const NavbarContainer = (props) => {

  const updateProfilePage = (userId) => {
    usersApi.getUser(userId).then(data => {
        this.props.setUserInfo(data)
      } )
  }

  return (
    <Navbar {...props} updateProfilePage={updateProfilePage} />
  )
}



const mapStateToProps = (state) => ({
  myUserId: getUserId(state),
  currentUserId: getCurrentUserId(state),
  navbarItems: getNavbarItems(state)
})


export default connect (mapStateToProps, {
  setCurrentUserId,
  setUserInfo,
  selectNavbarItem
}) (NavbarContainer)

