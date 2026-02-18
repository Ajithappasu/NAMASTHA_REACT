import {LOGO_HOME_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header =()=>{
  const onlineStatus= useOnlineStatus();
  const [btnName, setBtnName] = useState("login");
return(<div className="header">
    <div className="logo-container">
      <img className="logo"  src={LOGO_HOME_URL} />
    </div>
  <div className="nav-items">
      <ul>
        <li><Link to ="/" >Home</Link></li>
        <li>online Status : {onlineStatus?"✅":"🔴"}</li>
     <li><Link  to ="/about">About us</Link></li>
     <li><Link  to ="/contacts">contact us</Link></li>
     <li><Link to="/Growsery">Growsery</Link></li>
        <li>cart</li>
        <button className="login" onClick={()=>{btnName ==="login"?setBtnName("logout"):setBtnName("login")}}>{btnName}</button>
      </ul>
     </div>
 </div>);
};

export default Header;