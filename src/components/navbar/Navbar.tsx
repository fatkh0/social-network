import React from "react";
import s from "./Navbar.module.sass"
import NavbarItem from "./navbaritem/NavbarItem.tsx";
import {TNavbarItem} from "./NavbarContainer";

//navbarItems={navbarItems} setSelectedNavItem={setSelectedNavItem} selectedNavItem={selectedNavItem}
type TProps = {
  navbarItems: TNavbarItem
  setSelectedNavItem: (navBarItemId: number) => void
  selectedNavItem: number
  myUserId: number
  currentUserId: number
}

const Navbar = React.memo((props) => {

  const contentPages = props.navbarItems.map(t => <NavbarItem {...props} key={t.id} pageName={ t.pageName } path={ t.path } />)

  return (
    <nav className={s.nav}>
      { contentPages }
    </nav>
  );
})

export default Navbar;
