import { useState } from "react";
import { LOGO_URL } from "../utilis/constants";
import { Link } from "react-router-dom";

export const Header = () => {
  const [login, setLogin] = useState("login");

  return (
    <div className="header flex">
      <Link to="/">
        <img src={LOGO_URL}></img>
      </Link>

      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
        <button
          className="login"
          onClick={() => {
            login == "login" ? setLogin("logout") : setLogin("login");
          }}
        >
          {login}
        </button>
      </ul>
    </div>
  );
};

export default Header;
