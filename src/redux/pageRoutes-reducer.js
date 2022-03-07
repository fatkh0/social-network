import ProfileContainer from "../components/content/profile/ProfileContainer";
import Messages from "../components/content/messages/Messages";
import News from "../components/content/news/News";
import Music from "../components/content/music/Music";
import Settings from "../components/content/settings/Settings";
import UsersContainer from "../components/content/friends/UsersContainer";
import LoginPageContainer from "../components/login/loginPageContainer";

const initialState = [
    {id: 1, component: ProfileContainer,     path: '/profile/:id?'},
    {id: 2, component: UsersContainer,       path: '/friends'},
    {id: 3, component: Messages,             path: '/messages'},
    {id: 4, component: News,                 path: '/news'},
    {id: 5, component: Music,                path: '/music'},
    {id: 6, component: Settings,             path: '/settings'},
    {id: 7, component: LoginPageContainer,   path: '/login'},
  ]

const pageRoutesReducer = (state = initialState, action) => {
  return state
}

export default pageRoutesReducer