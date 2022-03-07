import React from "react";
import s from "./Navbar.module.sass"
import NavbarItem from "./navbaritem/NavbarItem";

const Navbar = (props) => {

  const contentPages = props.navbarItems.map(t => <NavbarItem {...props} key={t.id} pageName={ t.pageName } path={ t.path } />)

  return (
    <nav className={s.nav}>
      { contentPages }
    </nav>
  );
};

export default Navbar;
