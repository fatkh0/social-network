import React from "react";
import s from "./Header.module.sass"
import AuthContainer from "./auth/AuthContainer.tsx";
import Logo from "./logo/Logo.tsx";

const Header = React.memo(() => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header_inner}>
          <Logo />
          <AuthContainer />
        </div>
      </div>
    </header>
  );
})

export default Header;
