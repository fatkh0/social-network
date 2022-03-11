import {usersApi, profileApi} from "../api/api";

const UPDATE_CURRENT_POST = 'UPDATE-CURRENT-POST'
const ADD_POST = 'ADD-POST'
const SET_USER_INFO = 'SET_USER_INFO'
const SET_CURRENT_USER_ID = 'SET_CURRENT_USER_ID'
const UPDATE_PROFILE_PAGE = 'UPDATE_PROFILE_PAGE'
const SET_STATUS = 'SET_STATUS'

const initialState = {
  postData: [
    {id: 1, likeCount: 4, postText: 'post1'},
    {id: 2, likeCount: 2, postText: 'post2'},
    {id: 3, likeCount: 4, postText: 'post3'},
    {id: 4, likeCount: 4, postText: 'post4'},
    {id: 5, likeCount: 2, postText: 'post5'},
    {id: 6, likeCount: 4, postText: 'post6'},
    {id: 7, likeCount: 2, postText: 'post7'},
    {id: 8, likeCount: 4, postText: 'post8'},
    {id: 9, likeCount: 2, postText: 'post9'},
  ],
  avatar: null,
  userInfo: null,
  currentUserId: null,
  photos: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {


  switch(action.type) {
    case ADD_POST:
        const newPost = {
          id: state.postData.length + 1,
          likeCount: 0,
          postText: action.newPostText
        }
        return {
          ...state,
          postData: [...state.postData, newPost]
        }

    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo
      }

    case SET_CURRENT_USER_ID:
      return {
        ...state,
        currentUserId: action.currentUserId
      }

    case UPDATE_PROFILE_PAGE:
      return {...state}

    case SET_STATUS: 
      return {...state, status: action.status}

    default:
      return state
  }
}
export default profileReducer

export const addPost = (newPostText) => ({
  type: ADD_POST,
  newPostText
})

export const setUserInfo = (userInfo) => ({type: SET_USER_INFO, userInfo})
export const setCurrentUserId = (currentUserId) => ({type: SET_CURRENT_USER_ID, currentUserId})
export const updateProfilePage = () => ({type: UPDATE_PROFILE_PAGE})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getStatus = (userId) => (dispatch) => {
    profileApi.getStatus(userId)
      .then(response => {
          dispatch(setStatus(response))
      })
}

export const updateStatus = (status) => (dispatch) => {
  try {
    profileApi.updateStatus(status)
      .then(response => {
        if (response.status === 200) {
          dispatch(setStatus(status))
        }
      })
  } catch (error) {
    debugger
  }
    
}

export const setUserPage = (userId) => {
  
  return (dispatch) => {
    if (!userId) return

    profileApi.getProfile(userId).then(data => {
      dispatch(setUserInfo(data))
    } )
  }
}
