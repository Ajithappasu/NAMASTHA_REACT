import {LOGO_HOME_URL } from "../utils/constants";


const Header =()=>{
return(<div className="header">
    <div className="logo-container">
      <img className="logo"  src={LOGO_HOME_URL} />
    </div>
  <div className="nav-items">
      <ul>
        <li>home</li>
        <li>About-us</li>
        <li>Contact-us</li>
        <li>cart</li>
      </ul>
     </div>
 </div>);
};

export default Header;