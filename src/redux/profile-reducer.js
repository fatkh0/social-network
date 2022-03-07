import {usersApi} from "../api/api";

const UPDATE_CURRENT_POST = 'UPDATE-CURRENT-POST'
const ADD_POST = 'ADD-POST'
const SET_USER_INFO = 'SET_USER_INFO'
const SET_CURRENT_USER_ID = 'SET_CURRENT_USER_ID'
const UPDATE_PROFILE_PAGE = 'UPDATE_PROFILE_PAGE'

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
  newPostText: '',
  avatar: null,
  userInfo: null,
  currentUserId: null,
  photos: null
}

const profileReducer = (state = initialState, action) => {


  switch(action.type) {

    case UPDATE_CURRENT_POST:
      return {
        ...state,
        newPostText: action.text
      }

    case ADD_POST:
      const newPostText = state.newPostText
      if(newPostText) {
        const newPost = {
          id: state.postData.length + 1,
          likeCount: 0,
          postText: newPostText
        }

        return {
          ...state,
          postData: [...state.postData, newPost],
          newPostText: ''
        }
      }
      return state


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

    default:
      return state
  }
}
export default profileReducer

export const addPostActionCreator = () => ({
  type: ADD_POST
})

export const updateCurrentPostActionCreator = (text) => ({
  type: UPDATE_CURRENT_POST,
  text
})
export const setUserInfo = (userInfo) => ({type: SET_USER_INFO, userInfo})
export const setCurrentUserId = (currentUserId) => ({type: SET_CURRENT_USER_ID, currentUserId})
export const updateProfilePage = () => ({type: UPDATE_PROFILE_PAGE})

export const setUserPage = (userId) => {
  return (dispatch) => {
    if (!userId) return

    usersApi.getUser(userId).then(data => {
      dispatch(setUserInfo(data))
    } )
  }
}
