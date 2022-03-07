import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
  addToFriends,
  removeFromFriends,
  setCurrentPage,
  setTotalUsersCount, movePagesToLeft, movePagesToRight, toggleUsersInFetching,
  updateUsers
} from "../../../redux/users-reducer";
import s from "./Users.module.sass";
import UsersPageNavigation from "./pagesNavigation/UsersPageNavigation";
import Preloader from "../../common/preloader/Preloader";
import {setCurrentUserId} from "../../../redux/profile-reducer";
import withRedirect from "../../../hoc/withRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {

  componentDidMount() {
    if(this.props.users.length === 0) {
      this.props.updateUsers(this.props.currentPage, this.props.pageSize)
    }
  }


  render() {
    return (
        <div className={s.users}>
          <UsersPageNavigation
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            startPageNumber={this.props.startPageNumber}
            endPageNumber={this.props.endPageNumber}
            setCurrentPage={this.props.setCurrentPage}
            movePagesToLeft={this.props.movePagesToLeft}
            movePagesToRight={this.props.movePagesToRight}
            totalUsersCount={this.props.totalUsersCount}
            updateUsers={this.props.updateUsers}
          />



          { this.props.isFetching === true
            ? <Preloader />
            : <Users users={this.props.users}
                   addToFriends={this.props.addToFriends}
                   removeFromFriends={this.props.removeFromFriends}
                   setCurrentUserId={this.props.setCurrentUserId}
                   usersInFetching={this.props.usersInFetching}
              />
          }
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  const usersPage = state.usersPage
  return {
    users: usersPage.users,
    totalUsersCount: usersPage.totalUsersCount,
    pageSize: usersPage.pageSize,
    currentPage: usersPage.currentPage,
    startPageNumber: usersPage.startPageNumber,
    endPageNumber: usersPage.endPageNumber,
    isFetching: usersPage.isFetching,
    usersInFetching: usersPage.usersInFetching
  }
}

const mapDispatchToProps = () => ({
  addToFriends,
  removeFromFriends,
  setCurrentPage,
  setTotalUsersCount,
  movePagesToLeft,
  movePagesToRight,
  setCurrentUserId,
  toggleUsersInFetching,
  updateUsers
})



export default compose (
  connect (mapStateToProps, {
    addToFriends,
    removeFromFriends,
    setCurrentPage,
    setTotalUsersCount,
    movePagesToLeft,
    movePagesToRight,
    setCurrentUserId,
    toggleUsersInFetching,
    updateUsers
  }),
  withRedirect
) (UsersContainer)


