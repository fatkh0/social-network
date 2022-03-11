import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    //'API-KEY': 'd1014d81-8b6b-42c0-b1bd-0e98246bce9f'
    'API-KEY': '939476c4-220f-47d6-a62e-6b20e947e452'
  }
})

export const usersApi = {
  getUsers (currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },

  addToFriends (userId) {
    return instance.post(`follow/${userId}`).then(response => response.data)
  },

  removeFromFriends (userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data)
  },

  getUser (userId) {
    console.warn('Use profileApi.getProfile')
    return instance.get(`profile/${userId}`).then(response => response.data)
  }
}

export const profileApi = {
  getProfile (userId) {
    return instance.get(`profile/${userId}`).then(response => response.data)
  },

  getStatus (userId) {
    return instance.get(`/profile/status/${userId}`).then(response => response.data)
  },

  updateStatus (status) {
    return instance.put(`/profile/status/`, {status})
  }
}

export const authApi = {
  getAuth () {
    return  instance.get('auth/me').then(response => response.data)
  }, 
  logIn (email, password, rememberMe) {
    return instance.post('auth/login', {email, password, rememberMe}).then(response => response.data)
  }
}

/*
auth/logout	5
*/