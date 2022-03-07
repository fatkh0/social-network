import Profile from "../components/content/profile/Profile";
import Messages from "../components/content/messages/Messages";
import News from "../components/content/news/News";
import Music from "../components/content/music/Music";
import Settings from "../components/content/settings/Settings";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

const store = {
  _cullSubscriber: null,

  _state: {
    pageRoutes: [
      {component: Profile,     path: '/profile'},
      {component: Messages,    path: '/messages'},
      {component: News,        path: '/news'},
      {component: Music,       path: '/music'},
      {component: Settings,    path: '/settings'},
    ],

    profilePage: {
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
    },

    messagesPage: {
      messages: [
        {direction: 0, message: 'Message1'},
        {direction: 0, message: 'Message2'},
        {direction: 1, message: 'Message3'},
        {direction: 0, message: 'Message4'},
        {direction: 1, message: 'Message5'},
        {direction: 0, message: 'Message6'},
        {direction: 0, message: 'Message7'},
        {direction: 1, message: 'Message8'},
        {direction: 1, message: 'Message9'},
        {direction: 1, message: 'Message10'},
        {direction: 1, message: 'Message11'},
        {direction: 1, message: 'Message12'},
        {direction: 0, message: 'Message13'},
        {direction: 0, message: 'Message14'},
        {direction: 1, message: 'Message15'},
        {direction: 0, message: 'Message16'},
        {direction: 1, message: 'Message17'},
        {direction: 0, message: 'Message18'},
        {direction: 1, message: 'Message19'},
        {direction: 0, message: 'Message20'},
        {direction: 1, message: 'Message21'},
        {direction: 0, message: 'Message22'},
        {direction: 0, message: 'Message23'},
        {direction: 1, message: 'Message24'},
        {direction: 0, message: 'Message25'},
      ],

      newMessage: '',

      dialogs: [
        {id: 1, name: "Erik Fatkhutdinov"},
        {id: 2, name: "AAAAAAAAAAAAAAAAAAAA"},
        {id: 3, name: "BBBBBBBBBBBBBBBBBBB"},
        {id: 4, name: "CCCCCCCCCCCCCCCCCCCC"},
        {id: 5, name: "DDDDDDDDDDDDDDDDDDDDD"},
        {id: 6, name: "EEEEEEEEEEEEEEEEEEEEEEEE"},
        {id: 7, name: "FFFFFFFFFFFFFFFFFFF"},
        {id: 8, name: "GGGGGGGG"},
        {id: 9, name: "HHHHHHHHHHHHH"},
        {id: 10, name: "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII"},
        {id: 11, name: "JJJJJJJJJJ"},
        {id: 12, name: "KKKKKK"},
        {id: 13, name: "LLLLLLLLLLLLLLL"},
        {id: 14, name: "MMMMMMM MMMMMMMMMMMMM"},
        {id: 15, name: "NNNN NNNNNNNNNNNNNNNNNNNNN"},
        {id: 16, name: "OOOOOOOOO OOOOOOOOOOO"},
        {id: 17, name: "PPPP PPPPPPP"},
        {id: 18, name: "QQQQQ QQQQQQQQ"},
        {id: 19, name: "RRRRRRRRRRR RRRRRRR"},
      ],
    },

  },

  getState() {
    return this._state
  },

  subscribe (observer) {
    this._cullSubscriber = observer
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)

    this._cullSubscriber(this)
  }
}

//export default store








