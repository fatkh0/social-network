import React, { useEffect } from "react";
import {connect} from "react-redux";
import Users from "./Users.tsx";
import { actions } from "../../../redux/users-reducer/users-reducer";
import {
  addToFriends,
  removeFromFriends,
  updateUsers,
} from "../../../redux/users-reducer/users-reducer.ts";
import s from "./Users.module.sass";
import UsersPageNavigation from "./pagesNavigation/UsersPageNavigation.tsx";
import Preloader from "../../common/preloader/Preloader.tsx";
import {setCurrentUserId} from "../../../redux/profile-reducer/profile-reducer.ts";
import withRedirect from "../../../hoc/withRedirect";
import {compose} from "redux";
import {AppStateType} from '../../../redux/redux-store'

import {
  getUsersPageUsers,
  getUsersPageTotalUsersCount,
  getUsersPagePageSize,
  getUsersPageCurrentPage,
  getUsersPageStartPageNumber,
  getUsersPageEndPageNumber,
  getUsersPageIsFetching,
  getUsersPageusersInFetching
} from '../../../utils/selectors/selectors.ts'
import { UserType } from "../../../types/types";


type TStateProps = {
  users: Array<UserType>
  totalUsersCount: number
  pageSize: number
  currentPage: number
  isFetching: boolean
  usersInFetching: Array<number>
}

type TDispatchProps = {
  addToFriends: (userId: number) => void
  removeFromFriends: (userId: number) => void
  setCurrentUserId: (userId: number) => void
  updateUsers: (currentPage: number, pageSize: number) => void
  setCurrentPage: (currentPage: number) => void
}

type TOwnProps = {}

type TProps = TStateProps & TDispatchProps & TOwnProps


const UsersContainer: React.FC<TProps> = (props) => {


  useEffect(() => {
    if(props.users.length === 0) {
      props.updateUsers(props.currentPage, props.pageSize)
    }
  })


  return (
        <div className={s.users}>
          <UsersPageNavigation
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            totalUsersCount={props.totalUsersCount}
            updateUsers={props.updateUsers}
            setCurrentPage={props.setCurrentPage}
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




const mapStateToProps = (state: AppStateType): TStateProps => ({
    users: getUsersPageUsers(state),
    totalUsersCount: getUsersPageTotalUsersCount(state),
    pageSize: getUsersPagePageSize(state),
    currentPage: getUsersPageCurrentPage(state),
    isFetching: getUsersPageIsFetching(state),
    usersInFetching: getUsersPageusersInFetching(state)
})





export default compose  (
  connect <TStateProps, TDispatchProps, TOwnProps, AppStateType> (mapStateToProps, {
    addToFriends,
    removeFromFriends,
    setCurrentUserId,
    updateUsers,
    setCurrentPage

  }),
  withRedirect
) (UsersContainer)


