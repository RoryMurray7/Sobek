import logo from "./assets/sobek.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="headerContainer">
      <Link to="/">
        <img id="logo" src={logo} alt="logo" />
      </Link>
    </div>
  );
}

export default Header;
