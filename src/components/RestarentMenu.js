
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestarentMenu from "../utils/useRestarentMenu";
import RestarentCategories from "./RestarentCategories";
import { useState } from "react";
const RestarentMenu =()=>{
  const {resId} = useParams();

    const resInfo = useRestarentMenu(resId);
  const [showIndex , setShowIndex]= useState(0);
    if (resInfo === null) return <Shimmer />;

  const { name } = resInfo?.data?.cards[2]?.card?.card?.info;

  const categories =
  resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log("CAT ",categories)

    return(<div>
        <h1  className="text-center font-bold my-7 text-2xl"> {name}</h1>
        <h2>menu </h2>
      {
        // this is children elements are controlled elements
        // we are controling the child by parent . 
        categories.map((category,Index)=>
          (<RestarentCategories data ={category} key ={category.card.card.title} 
          showItems={showIndex=== Index?true:false}
          setShowIndex={()=>{showIndex=== Index ?setShowIndex(null):setShowIndex(Index)}}
          />)
        )
      }
       {/* {categories.map((category) => (
      <div key={category.card.card.title}>
        <h3>{category.card.card.title}</h3>

        {category.card.card.itemCards.map((item) => (
          <div key={item.card.info.id}>
            <p>
              {item.card.info.name} - ₹
              {(item.card.info.price || item.card.info.defaultPrice) / 100}
            </p>
          </div>
        ))}
      </div>
    ))} */}
    </div>)
}

export default RestarentMenu;