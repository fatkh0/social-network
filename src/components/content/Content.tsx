import React from "react";
import { Route } from "react-router";
import s from "./Content.module.sass";
import withSuspense from "../../hoc/withSuspense";
import Preloader from "../common/preloader/Preloader";

const ProfileContainer = React.lazy(() => import("./profile/ProfileContainer.tsx"))
const UsersContainer = React.lazy(() => import("./friends/UsersContainer.tsx"))
const Messages = React.lazy(() => import("./messages/Messages.tsx"))
const News = React.lazy(() => import("./news/News.tsx"))
const Music = React.lazy(() => import("./music/Music.tsx"))
const Settings = React.lazy(() => import("./settings/Settings.tsx"))


type PropsTypes = {

}
const Content = React.memo((props) => {

  type PageTypes = {
    id: number
    component: any
    path: string
  }

  const pageRoutes: Array<PageTypes> = [
    {id: 1, component: ProfileContainer,     path: '/profile/:id?'},
    {id: 2, component: UsersContainer,       path: '/friends'},
    {id: 3, component: Messages,             path: '/messages'},
    {id: 4, component: News,                 path: '/news'},
    {id: 5, component: Music,                path: '/music'},
    {id: 6, component: Settings,             path: '/settings'},
  ]


  const pages = pageRoutes.map(t => {
    return <Route key={t.id}
                          path={t.path}
                          render={withSuspense(t.component)}
                        /> 
  })


  return (
    <div className={s.content}>
     {pages}
    </div>
  );
})

export default Content;
