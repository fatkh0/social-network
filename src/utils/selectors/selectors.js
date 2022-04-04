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
  return state.profilePage.userInfo
}





