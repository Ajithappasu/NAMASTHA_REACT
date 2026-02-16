import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestarentMenu =()=>{

    const [resInfo, setResInfo]= useState(null);

      const fetchMenu= async()=>{
const data = await fetch(
  "https://namastedev.com/api/v1/listRestaurantMenu/123456"
);

   console.log("hiii");
   const json =  await data.json();
   console.log(json);
 
   setResInfo(json);
    }
    useEffect(()=>{
        fetchMenu();
    },[]);

    if (resInfo === null) return <Shimmer />;

  
    return(<div>
        <h1> Name of the Restarent</h1>
        <h2>menu </h2>
        <h3>Biryani</h3>  
         <h3>roti</h3>
            <h3>chapathi</h3>
    </div>)
}

export default RestarentMenu;