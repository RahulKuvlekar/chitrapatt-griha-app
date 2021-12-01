import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <header className="header">
      <span onClick={() => history.push("/")} className="header__title">
        चित्रपट गृह 🎉
      </span>
    </header>
  );
};

export default Header;
