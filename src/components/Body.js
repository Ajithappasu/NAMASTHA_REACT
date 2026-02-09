import RestarentCard from "./RestarentCard";
import resList from "../utils/MockData";
 const Body = ()=>{
  return (
    <div className="Body">
      <div className="search">Search</div>
      <div className="res-container">
        { resList.map((resatrent)=>(
          <RestarentCard key = {resatrent.data.id} resData={resatrent}/>
        ))}
      </div>
    </div>
  );
}

export default Body;