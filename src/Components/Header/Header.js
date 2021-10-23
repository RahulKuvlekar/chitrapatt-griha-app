import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <span onClick={() => window.scroll(0, 0)} className="header__title">
        चित्रपट गृह 🎉
      </span>
    </header>
  );
};

export default Header;
