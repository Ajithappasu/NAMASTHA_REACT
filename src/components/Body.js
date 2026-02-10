import RestarentCard from "./RestarentCard";
import resList from "../utils/MockData";
import { useState,useEffect } from "react";

 const Body = ()=>{
     const [ listRestraunt ,setListRestraunt ]= useState([]);

  const fetchData= async ()=>{
const data = await fetch(
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);
const json=  await data.json();
console.log(json);
const restaurants =
  json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

setListRestraunt(restaurants || []);

  }
  useEffect(()=>{
console.log("use effect is working ");
fetchData();
  },[]);
   
  
  
 
  return (
    <div className="Body">
      <div className="search">Search</div>
      <button onClick={()=>{
         let      filteredRestraunt = resList.filter(
            (res)=>res.data.avgRating>4)
            setListRestraunt(filteredRestraunt);
            // onece a sate component is updated react will  render every thing once again related to the component
      }}>filter</button>
      <div className="res-container">
        { listRestraunt.map((restaurant)=>(
          <RestarentCard    key={restaurant.info.id}
    resData={restaurant.info}/>
        ))}
      </div>
    </div>
  );
}

export default Body;