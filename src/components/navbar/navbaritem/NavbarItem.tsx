import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavbarItem.module.sass"

const NavbarItem = React.memo((props) => {


  let path = props.path


  return (
      <div className={s.nav_item} >
        <NavLink activeClassName={s.active} to={path} > { props.pageName } </NavLink>
      </div>
  );
})

export default NavbarItem;
