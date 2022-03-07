import React from "react";
import s from "./Header.module.sass"
import AuthContainer from "./auth/AuthContainer";
import Logo from "./logo/Logo";

const Header = () => {
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
};

export default Header;
