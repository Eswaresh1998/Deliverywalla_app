import { Logo } from "../constants/uitil";
 
  const Header = ()=> {
    return (
    <div className="HeaderContainer">   
    <header className="Logo_container">
      <img id= "Logo" src ={Logo} alt="company_logo" />
    </header>
    </div>
  );
}

export default Header;