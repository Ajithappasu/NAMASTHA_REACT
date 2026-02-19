import {LOGO_HOME_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header =()=>{
  const onlineStatus= useOnlineStatus();
  const [btnName, setBtnName] = useState("login");
return(<div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50 ">
    <div className="logo-container">
      <img className="w-52"  src={LOGO_HOME_URL} />
    </div>
  <div className="nav-items">
      <ul className="flex justify-center mt-12 ">
        <li  className="px-6 backdrop:to-black"><Link to ="/" >Home</Link></li>
        <li className="px-6">online Status : {onlineStatus?"✅":"🔴"}</li>
     <li className="px-6"><Link  to ="/about">About us</Link></li>
     <li className="px-6"><Link  to ="/contacts">contact us</Link></li>
     <li className="px-6"><Link to="/Growsery">Growsery</Link></li>
        <li className="px-6" > cart</li>
        <button className="px-6" onClick={()=>{btnName ==="login"?setBtnName("logout"):setBtnName("login")}}>{btnName}</button>
      </ul>
     </div>
 </div>);
};

export default Header;
