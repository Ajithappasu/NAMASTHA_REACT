import RestarentCard from "./RestarentCard";
import resList from "../utils/MockData";
import { useState } from "react";
// let ListRestraunt =[
//   {  data: {
//       id: "334475",
//       name: "KFC",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],  
//       deliveryTime: 36,
//       avgRating:"4.2"
//     },},
      
//     {data: {
//       id: "334476",
//       name: "MCD",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],  
//       deliveryTime: 40,
//       avgRating:"3.8"
//     } ,
//     },];
 const Body = ()=>{
    // we are delcaring a state component   and set of that state component to update  the component 
    const [ listRestraunt ,setListRestraunt ]= useState(resList);
    // we are decaling the values inside  the useState ()  
    // we use this setListRestraunt to udate teh component 
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
        { listRestraunt.map((resatrent)=>(
          <RestarentCard key = {resatrent.data.id} resData={resatrent}/>
        ))}
      </div>
    </div>
  );
}

export default Body;