import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavbarItem.module.sass"

const NavbarItem = (props) => {


  let path = props.path

  const onProfilePage = () => {
    path = `/profile/${props.myUserId}`
    props.setCurrentUserId(props.myUserId)
    props.updateProfilePage(props.myUserId)
  }

  const onNavbarClick = () => {
    switch (path) {
      case '/profile':
        onProfilePage()
        break

      default:
        break
    }

    props.selectNavbarItem(path)
  }


  return (
      <div onClick={onNavbarClick} className={s.nav_item} >
        <NavLink activeClassName={s.active} to={path} > { props.pageName } </NavLink>
      </div>
  );
};

export default NavbarItem;
