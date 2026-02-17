import { useState, useEffect } from "react"
import { RES_MENU_API } from "./constants";
const useRestarentMenu =(resId)=>{
    const [resInfo, setResInfo]= useState(null);
     
    const fetchMenu= async()=>{
         const data = await fetch(
        RES_MENU_API+resId
                        );
      const json =  await data.json(); 
       setResInfo(json);
        }
  useEffect(()=>{
        fetchMenu();
    },[]);


    return resInfo;
}

export default useRestarentMenu;

/* 
this is a user defined hook 
*/