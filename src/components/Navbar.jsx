import logoImage from "../images/logo.png";

function Logo() {
  return <img className="logo" src={logoImage} alt="Logo"/>;
}


function Searchbar() {
  return(
    <section className="search-bar-section">
      <input type="text" id="search-input" placeholder="Search City"/>
    </section>
  );
};

function Navbar() {
  return (
    <nav>
      <Logo />
      <Searchbar/>
    </nav>



  );
};

export default Navbar;