import React  from "react";
import ReactDOM from "react-dom/client";
const Header =()=>{
return(<div className="header">
    <div className="logo-container">
      <img className="logo"  src="https://www.creativefabrica.com/wp-content/uploads/2020/02/11/Food-Logo-Graphics-1-71-580x386.jpg" />
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
const jsCssObject ={
  backgroundColor:"black",
  flex:"inline"
}

const RestarentCard = ()=>{
  return(
  <div className="res-card" >
    <img className="res-log" alt="res-log" src="https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-04.jpg"/>
    <h3>Ajith foods Foods </h3>
    <h4>Biryani   south indian   chinies </h4>
       <h4>4.9 starts rating </h4>
       <h4> 40 mins delivery</h4>

  </div>
  );
};

const Body = ()=>{
  return (
    <div className="Body">
      <div className="search">Search</div>
      <div className="res-container">
           <RestarentCard />
           <RestarentCard />
           <RestarentCard />
           <RestarentCard />
           <RestarentCard />
           <RestarentCard />
           <RestarentCard />
           <RestarentCard />
           <RestarentCard />
           <RestarentCard />
           <RestarentCard />
           <RestarentCard />
      </div>
    </div>
  );
}

const AppLayout =()=>{
    return (
    <div className="app">
        <Header />
        <Body /> 
   </div>)
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);