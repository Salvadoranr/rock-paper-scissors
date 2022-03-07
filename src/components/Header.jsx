import React from "react";
import { Link } from "react-router-dom";
import IconButton from "./IconButton";


const Header = ({name}) => {
  return (
    <header className="header_container">
        <h1 className="header_title">Hi, {name}</h1>
        <div className="header_button">
            <Link to="/">
            <IconButton name="signout" icon="faSignOutAlt" />
            </Link>
        </div>
    </header>
  );
}

export default Header;