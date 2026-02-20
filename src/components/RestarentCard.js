import { RES_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestarentCard = (props)=>{
 const { resData } = props;
  const {
    name,
    avgRating,
     cloudinaryImageId,
    cuisines,
    sla: { deliveryTime },
  } = resData;

  return(
  <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
   
    <img className="rounded-lg" alt="res-log"   src=
        {RES_LOGO_URL+cloudinaryImageId} 
        />
      
    <h3 className="font-bold py-4 text-lg">{name} </h3>
    <h4>{cuisines} </h4>
       <h4>{avgRating}starts rating </h4>
       <h4> {deliveryTime} mins delivery</h4>
     
 
  </div>
  );
};


/**  this is a Higher Order Component   its  take a component  and enhances the component and then  return it
 * it will have a return with props  and then the acutual return function  
 * these props are to pass the orginal component 
*/
export const RestarentCardLable =(RestarentCard)=>{
  return (props)=>{
return (<div>
  <label className="absolute bg-black text-white m-2 p-2">superfast Delivery</label>
  {console.log('heloo ')}
  <RestarentCard {...props}/>
</div>);
};
};
export default RestarentCard;