import { LOGO_URL } from "../utilis/constants";

export const Header = () => {
  return (
    <div className="header">
      <img src={LOGO_URL}></img>
      <ul className="links">
        <li>Menu</li>
        <li>contact</li>
        <li>links</li>
        <li>cart</li>
      </ul>
    </div>
  );
};

export default Header;
