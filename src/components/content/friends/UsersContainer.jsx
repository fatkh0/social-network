import React, { useEffect } from "react";
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

import {
  getUsersPageUsers,
  getUsersPageTotalUsersCount,
  getUsersPagePageSize,
  getUsersPageCurrentPage,
  getUsersPageStartPageNumber,
  getUsersPageEndPageNumber,
  getUsersPageIsFetching,
  getUsersPageusersInFetching
} from '../../../utils/selectors/selectors'



const UsersContainer = (props) => {


  useEffect(() => {
    if(props.users.length === 0) {
      props.updateUsers(props.currentPage, props.pageSize)
    }
  }, [])


  return (
        <div className={s.users}>
          <UsersPageNavigation
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            startPageNumber={props.startPageNumber}
            endPageNumber={props.endPageNumber}
            setCurrentPage={props.setCurrentPage}
            movePagesToLeft={props.movePagesToLeft}
            movePagesToRight={props.movePagesToRight}
            totalUsersCount={props.totalUsersCount}
            updateUsers={props.updateUsers}
          />



          { props.isFetching === true
            ? <Preloader />
            : <Users users={props.users}
                   addToFriends={props.addToFriends}
                   removeFromFriends={props.removeFromFriends}
                   setCurrentUserId={props.setCurrentUserId}
                   usersInFetching={props.usersInFetching}
              />
          }
        </div>
    )
}

class UsersContainer1 extends React.Component {

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

const mapStateToProps = (state) => ({
    users: getUsersPageUsers(state),
    totalUsersCount: getUsersPageTotalUsersCount(state),
    pageSize: getUsersPagePageSize(state),
    currentPage: getUsersPageCurrentPage(state),
    startPageNumber: getUsersPageStartPageNumber(state),
    endPageNumber: getUsersPageEndPageNumber(state),
    isFetching: getUsersPageIsFetching(state),
    usersInFetching: getUsersPageusersInFetching(state)
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


