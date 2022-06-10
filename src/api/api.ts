import axios from "axios";
import {UserInfoType, UserType} from "../types/types";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '939476c4-220f-47d6-a62e-6b20e947e452'
  }
})

export enum EResponseCode {
  Success = 0,
  Error = 1
}

type TGetUsers = {
  items: Array<UserType>
  totalCount: number
  error: string
}

export interface TPutDelete {
  resultCode: EResponseCode
  messages: Array<string | null>
  data: TAuthData | TLogInData
}

type TAuthData = {
  id: number
  email: string
  login: string
}

type TLogInData = {
  userId: number
}

interface TAuthMe extends TPutDelete {
  data: {
    id: number
    email: string
    login: string
  }
}

interface TLogIn extends TPutDelete  {
  data: {
    userId: number
  }
}


export const usersApi = {
  getUsers  (currentPage: number, pageSize: number) {
    return instance.get<TGetUsers>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },

  addToFriends  (userId: number) {
    return instance.post<TPutDelete>(`follow/${userId}`).then(response => response.data)
  },

  removeFromFriends (userId: number) {
    return instance.delete<TPutDelete>(`follow/${userId}`).then(response => response.data)
  },

  getUser  (userId: number) {
    console.warn('Use profileApi.getProfile')
    return instance.get<boolean>(`profile/${userId}`).then(response => response.data)
  }
}

export const profileApi = {
  getProfile (userId: number) {
    return instance.get<UserInfoType>(`profile/${userId}`).then(response => response.data)
  },

  getStatus (userId: number) {
    return instance.get<string | null>(`/profile/status/${userId}`).then(response => response.data)
  },

  updateStatus (status: string) {
    return instance.put<TPutDelete>(`/profile/status/`, {status})
  }
}

export const authApi = {
  getAuth () {
    return  instance.get<TAuthMe>('auth/me').then(response => response.data)
  }, 
  logIn (email: string, password: string, rememberMe = false) {
    return instance.post<TLogIn>('auth/login', {email, password, rememberMe}).then(response => response.data)
  },
  logOut () {
    return instance.delete<TPutDelete>('auth/login').then(response => response.data)
  }
}

