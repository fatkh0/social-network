import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {setCurrentUserId, setUserInfo} from "../../redux/profile-reducer";
import {usersApi} from "../../api/api";
import {selectNavbarItem} from "../../redux/navbar-reducer";



class NavbarContainer extends React.Component {

  updateProfilePage = (userId) => {
    usersApi.getUser(userId).then(data => {
        this.props.setUserInfo(data)
      } )
  }


  render () {
    return (
      <Navbar {...this.props} updateProfilePage={this.updateProfilePage} />
    )
  }
}


const mapStateToProps = (state) => ({
  myUserId: state.auth.userId,
  currentUserId: state.profilePage.currentUserId,
  navbarItems: state.navbar.navbarItems
})


export default connect (mapStateToProps, {
  setCurrentUserId,
  setUserInfo,
  selectNavbarItem
}) (NavbarContainer)

