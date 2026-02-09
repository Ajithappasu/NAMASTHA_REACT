import { RES_LOGO_URL } from "../utils/constants";

const RestarentCard = (props)=>{
 const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return(
  <div className="res-card" >
    <img className="res-log" alt="res-log"   src=
        {RES_LOGO_URL}
        />
    <h3>{name} </h3>
    <h4>{cuisines} </h4>
       <h4>{avgRating}starts rating </h4>
       <h4> {deliveryTime} mins delivery</h4>
 
  </div>
  );
};

export default RestarentCard;