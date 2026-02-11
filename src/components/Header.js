import {LOGO_HOME_URL } from "../utils/constants";
import { useState } from "react";


const Header =()=>{
  const [btnName, setBtnName] = useState("login");
return(<div className="header">
    <div className="logo-container">
      <img className="logo"  src={LOGO_HOME_URL} />
    </div>
  <div className="nav-items">
      <ul>
        <li>home</li>
        {console.log("i am rendering again")}
        <li>About-us</li>
        <li>Contact-us</li>
        <li>cart</li>
        <button className="login" onClick={()=>{btnName ==="login"?setBtnName("logout"):setBtnName("login")}}>{btnName}</button>
      </ul>
     </div>
 </div>);
};

export default Header;