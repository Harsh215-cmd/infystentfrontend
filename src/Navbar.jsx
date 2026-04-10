import logo from "./assets/infystent_logo_transparent.png"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
           <a href="/"><img src={logo} alt="" /></a>
        </div>

        {/* Menu */}
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li>Services</li>
          <li>Career</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;