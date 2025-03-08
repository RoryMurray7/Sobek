import logo from "./assets/sobek.png";

function Header() {
  return (
    <div className="headerContainer" style={{ backgroundColor: "#FFFFFF" }}>
      <img id="logo" src={logo} alt="logo" />
    </div>
  );
}

export default Header;
