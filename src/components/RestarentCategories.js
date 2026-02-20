import ItemList from "./ItemList";
import { useState } from "react";
const RestarentCategories= ({data, showItems, setShowIndex})=>{
  
    const showAble =()=>{
 setShowIndex();
    }
return (<div>
    <div className="w-6/12 mx-auto  bg-gray-50  shadow-lg p-4  flex justify-between">
 <span className="font-bold text-lg"> {data.card.card.title}</span>
 <span  className="cursor-pointer" onClick={()=>{showAble()}}> ⬇️ </span>
</div>
{showItems && <ItemList key= {data.card.card.title}  data ={data} />}
</div>)
}
export default RestarentCategories;