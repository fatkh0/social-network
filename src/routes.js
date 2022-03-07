import Profile from "./components/content/profile/Profile";
import Messages from "./components/content/messages/Messages";
import News from "./components/content/news/News";
import Music from "./components/content/music/Music";
import Settings from "./components/content/settings/Settings";

const pageRoutes = [
  {component: Profile,     path: '/profile'},
  {component: Messages,    path: '/messages'},
  {component: News,        path: '/news'},
  {component: Music,       path: '/music'},
  {component: Settings,    path: '/settings'},
]

export default routes