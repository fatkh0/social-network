import {profileApi} from "../../api/api.ts";
import {PhotosType, ContactsType, UserInfoType, PostType} from "../../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../redux-store";

const ADD_POST = 'app/profilePage/ADD-POST'
const SET_USER_INFO = 'app/profilePage/SET_USER_INFO'
const SET_CURRENT_USER_ID = 'app/profilePage/SET_CURRENT_USER_ID'
const SET_STATUS = 'app/profilePage/SET_STATUS'
const DELETE_POST = 'app/profilePage/DELETE_POST'


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
  ] as Array<PostType>,
  avatar: null as string | null,
  userInfo: null as UserInfoType | null,
  currentUserId: null as number | null,
  photos: null as string | null,
  status: null as string | null
}

export type InitialStateType = typeof initialState

type TAction = AddPostActionType | DeletePostActionType |
    SetUserInfoActionType | SetCurrentUserIdActionType | SetStatusActionType

const profileReducer = (state = initialState, action: TAction): InitialStateType => {
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


    case SET_STATUS: 
      return {...state, status: action.status}

    case DELETE_POST:
      return {...state, postData: state.postData.filter(t => t.id !== action.postId)}

    default:
      return state
  }
}
export default profileReducer




type AddPostActionType = {
  type: typeof ADD_POST
  newPostText: string
}
export const addPost = (newPostText: string): AddPostActionType => ({ type: ADD_POST, newPostText })


type DeletePostActionType = {
  type: typeof DELETE_POST
  postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId })

type SetUserInfoActionType = {
  type: typeof SET_USER_INFO
  userInfo: UserInfoType
}
export const setUserInfo = (userInfo: UserInfoType): SetUserInfoActionType => ({type: SET_USER_INFO, userInfo})

type SetCurrentUserIdActionType = {
  type: typeof SET_CURRENT_USER_ID
  currentUserId: number
}
export const setCurrentUserId = (currentUserId: number): SetCurrentUserIdActionType => 
({type: SET_CURRENT_USER_ID, currentUserId})




type SetStatusActionType = {
  type: typeof SET_STATUS
  status: string
}
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status})


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, TAction>

export const getStatus = (userId: number): ThunkType => async (dispatch: any) => {
  try {
    const response = await profileApi.getStatus(userId)
    dispatch(setStatus(response))
  } catch (error) {
    console.log("profile getStatus error: ", error)
  }

}

export const updateStatus = (status: string | null): ThunkType => async (dispatch: any) => {
  try {
    const response = await profileApi.updateStatus(status)
    if (response.status === 200) {
      dispatch(setStatus(status))
    }
  } catch (error) {
    console.log("profile updateStatus error: ", error)
  }
}

export const setUserPage = (userId: number): ThunkType => async (dispatch: any) => {
    if (!userId) return

  try {
    const response = await profileApi.getProfile(userId)
    dispatch(setUserInfo(response))
  } catch (error) {
    console.log("profile setUserPage error: ", error)
  }
}

