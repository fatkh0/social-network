export type PhotosType = {
    small: string | null
    large: string | null
}
export interface UserType {
    name: string
    id: number
    photos: PhotosType
    "status": string | null,
    "followed": boolean
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export interface UserInfoType {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    contacts: ContactsType
    photos: PhotosType
}
export interface PostType {
    id: number
    likeCount: number
    postText: string
}
export interface MessageType {
    id: number
    direction: number
    message: string
}
export interface DialogsType {
    id: number
    name: string
}

export interface ILoginForm {
    email: string
    password: string 
    rememberMe: boolean
}