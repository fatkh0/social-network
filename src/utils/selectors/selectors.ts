import {AppStateType} from "../../redux/redux-store";

export const getUserId = (state: AppStateType): number => {
  return state.auth.userId
}

export const getProfileUserId = (state: AppStateType): number => {
  return state.profilePage.userInfo.userId
}

export const getCurrentUserId = (state: AppStateType): number => {
  return state.profilePage.currentUserId
}


export const getIsLogIn = (state: AppStateType) => {
  return state.auth.isLogIn
}

export const getUserPhoto = (state: AppStateType) => {
  return state.profilePage.avatar
}

export const getIsAuthFetching = (state: AppStateType) => {
  return state.auth.isFetching
}

export const getAuthLogin = (state: AppStateType) => {
  return state.auth.login
}


export const getProfileIsFetching = (state: AppStateType) => {
  return state.profilePage.isFetching
}

export const getProfileUserInfo = (state: AppStateType) => {
  return state.profilePage.userInfo
}

export const getProfileStatus = (state: AppStateType) => {
  return state.profilePage.status
}

export const getProfilePostData = (state: AppStateType) => {
  return state.profilePage.postData
}



export const getMessagesPageDialogs = (state: AppStateType) => {
  return state.messagesPage.dialogs
}

export const getMessagesPageMessages = (state: AppStateType) => {
  return state.messagesPage.messages
}



export const getUsersPageUsers = (state: AppStateType) => {
  return state.usersPage.users
}


export const getUsersPageTotalUsersCount = (state: AppStateType) => {
  return state.usersPage.totalUsersCount
}

export const getUsersPagePageSize = (state: AppStateType) => {
  return state.usersPage.pageSize
}

export const getUsersPageCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage
}

export const getUsersPageStartPageNumber = (state: AppStateType) => {
  return state.usersPage.startPageNumber
}

export const getUsersPageEndPageNumber = (state: AppStateType) => {
  return state.usersPage.endPageNumber
}

export const getUsersPageIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching
}

export const getUsersPageusersInFetching = (state: AppStateType) => {
  return state.usersPage.usersInFetching
}









