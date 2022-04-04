export const getUserId =(state) => {
  return state.auth.userId
}

export const getCurrentUserId =(state) => {
  return state.profilePage.currentUserId
}

export const getNavbarItems =(state) => {
  return state.navbar.navbarItems
}

export const getIsLogIn =(state) => {
  return state.auth.isLogIn
}

export const getUserPhoto =(state) => {
  return state.profilePage.avatar
}

export const getIsAuthFetching =(state) => {
  return state.auth.isFetching
}

export const getAuthLogin =(state) => {
  return state.auth.login
}


export const getProfileIsFetching =(state) => {
  return state.profilePage.isFetching
}

export const getProfileUserInfo =(state) => {
  return state.profilePage.userInfo
}

export const getProfileStatus =(state) => {
  return state.profilePage.status
}

export const getProfilePostData =(state) => {
  return state.profilePage.postData
}


export const getPageRoutes =(state) => {
  return state.pageRoutes
}

export const getSelectedPage =(state) => {
  return state.navbar.selectedPage
}

export const getMessagesPageDialogs =(state) => {
  return state.messagesPage.dialogs
}

export const getMessagesPageMessages =(state) => {
  return state.messagesPage.messages
}



export const getUsersPageUsers =(state) => {
  return state.usersPage.users
}


export const getUsersPageTotalUsersCount =(state) => {
  return state.usersPage.totalUsersCount
}

export const getUsersPagePageSize =(state) => {
  return state.usersPage.pageSize
}

export const getUsersPageCurrentPage =(state) => {
  return state.usersPage.currentPage
}

export const getUsersPageStartPageNumber =(state) => {
  return state.usersPage.startPageNumber
}

export const getUsersPageEndPageNumber =(state) => {
  return state.usersPage.endPageNumber
}

export const getUsersPageIsFetching =(state) => {
  return state.usersPage.isFetching
}

export const getUsersPageusersInFetching =(state) => {
  return state.usersPage.usersInFetching
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









