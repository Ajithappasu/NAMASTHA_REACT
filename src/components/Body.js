import RestarentCard from "./RestarentCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
 const Body = ()=>{
  console.log("body rendering");

     const [ listRestraunt ,setListRestraunt ]= useState([]);
     const [allRestrauntList, setAllRestrauntList ]= useState([]);

     const [searchTxt, setSearchTxt]= useState("");

  const fetchData= async ()=>{
const data = await fetch(
  "https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9818564%26lng=79.4703885%26is-seo-homepage-enabled=true%26page_type=DESKTOP_WEB_LISTING"
);
const json=  await data.json();
console.log(json)
const restaurants = json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
// const restaurants = json;
console.log(restaurants);
setListRestraunt(restaurants || []);
setAllRestrauntList(restaurants || []); 
  }

  useEffect(()=>{
console.log("use effect is working ");
fetchData();
  },[]);
  // condesional rendering
  return listRestraunt.length ===0 ? <Shimmer/> :(
    <div className="Body">
      <div className="filter">
      <div className="search">
        <input type="text"  className="search-box"  value={searchTxt} onChange={(e)=>{setSearchTxt(e.target.value)}}/>
        <button onClick={()=>{
          console.log(searchTxt)
      const  updatedList =    allRestrauntList.filter((restarent)=>
            restarent.info.name.toLowerCase().includes(searchTxt.toLowerCase())
          )
             setListRestraunt(updatedList);
        }}>Search</button>
        </div>
      <button className="filter-button" onClick={()=>{
         let      filteredRestraunt = listRestraunt.filter(
            (res)=>Number(res?.info?.avgRating)>4)
            setListRestraunt(filteredRestraunt);
            // onece a sate component is updated react will  render every thing once again related to the component
      }}>filter</button>
      </div>
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