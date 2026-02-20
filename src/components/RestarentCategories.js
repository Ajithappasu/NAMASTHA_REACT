import ItemList from "./ItemList";
import { useState } from "react";
const RestarentCategories= (props)=>{
    const [showItems , setShowItes]= useState(false);
    const showAble =()=>{
  setShowItes(!showItems);
    }
return (<div>
    <div className="w-6/12 mx-auto  bg-gray-50  shadow-lg p-4  flex justify-between">
 <span className="font-bold text-lg"> {props.data.card.card.title}</span>
 <span  className="cursor-pointer" onClick={()=>{showAble()}}> ⬇️ </span>
</div>
{showItems && <ItemList key= {props.data.card.card.title}  data ={props.data} />}
</div>)
}
export default RestarentCategories;