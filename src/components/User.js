import { useState , useEffect } from "react";
const Users =(props)=>{
    useEffect(()=>{
  const hi=  setInterval(()=>{
 console.log("set Interval time OUT");
    }, 1000);
    // we can use a siila function like componentWillUnmount in useEffect   a
    // a function to execute  when we are leaving the page that is return in  effectfunction
   return ()=>{
  clearInterval(hi);
   }
    }, [])
    const{name, location ,contact}= props
    // to create multiple state variables  in functional componenets
    const [count1] =useState(1);
    const [count2] = useState(2);
        return (
    <div className="user-card">
    <h1> count1 : {count1}</h1>
       <h1> count2 : {count2}</h1>
        <h2>Name :{name}</h2>
        <h3>Location : {location}</h3>
        <h3>Contacts :{contact}</h3>
    </div>)
}
export default Users;