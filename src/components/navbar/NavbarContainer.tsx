import React, {useState} from "react";
import Navbar from "./Navbar.tsx";
import {connect} from "react-redux";
import {getUserId, getCurrentUserId, getNavbarItems} from '../../utils/selectors/selectors.ts'
import {AppStateType} from "../../redux/redux-store";

type TOwnProps = {}

type TProps = TStateToProps & TDispatchToProps & TOwnProps

export type TNavbarItem = {
  id: number
  path: string
  pageName: string
}

const NavbarContainer: React.FC<TProps> = (props) => {
  const [selectedNavItem, setSelectedNavItem] = useState<number>(1)



  const navbarItems: Array<TNavbarItem> = [
    {id: 1, path: '/profile',   pageName: 'Profile'},
    {id: 2, path: '/friends',   pageName: 'Friends'},
    {id: 3, path: '/messages',  pageName: 'Messages'},
    {id: 4, path: '/news',      pageName: 'News'},
    {id: 5, path: '/music',     pageName: 'Music'},
    {id: 6, path: '/settings',  pageName: 'Settings'},
  ]

  return (
    <Navbar {...props}  navbarItems={navbarItems} setSelectedNavItem={setSelectedNavItem} selectedNavItem={selectedNavItem} />
  )
}

type TStateToProps = {
  myUserId: number
  currentUserId: number
}

type TDispatchToProps = {}

const mapStateToProps = (state: AppStateType): TStateToProps => ({
  myUserId: getUserId(state),
  currentUserId: getCurrentUserId(state)
})


export default connect <TStateToProps, TDispatchToProps, TOwnProps, AppStateType> (mapStateToProps, {}) (NavbarContainer)

