import RestarentCard from "./RestarentCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
 const Body = ()=>{
  console.log("body rendering");
  const onlineStatus = useOnlineStatus();

     const [ listRestraunt ,setListRestraunt ]= useState([]);
     const [allRestrauntList, setAllRestrauntList ]= useState([]);

     const [searchTxt, setSearchTxt]= useState("");

  const fetchData= async ()=>{
const data = await fetch(
  "https://namastedev.com/api/v1/listRestaurants"
);
const json=  await data.json();
     const restaurants =
        json?.data?.data?.cards
          ?.find((card) => card?.card?.card?.gridElements)
          ?.card?.card?.gridElements?.infoWithStyle?.restaurants;
// const restaurants = json;

setListRestraunt(restaurants || []);
setAllRestrauntList(restaurants || []); 
  }


  useEffect(()=>{
    // if the dependency array is empty then it is called initialy only on first render 
    // if the dependeny array is not present then it will be called on every render 
    // if dependency array has element [btnNameReact] => called every time  when that elemet(btnNameReact) is updated
console.log("use effect is working ");
fetchData();
  },[]);


  if(!onlineStatus){
    return(<h1>Looks like you are offline Please connect to your Internet</h1>)
  }
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
  {listRestraunt.map((restaurant) => (
    <Link
      key={restaurant.info.id}
      to={"/restarent/" + restaurant.info.id}
    >
      <RestarentCard resData={restaurant.info} />
    </Link>
  ))}
</div>
    </div>
  );
}

export default Body;