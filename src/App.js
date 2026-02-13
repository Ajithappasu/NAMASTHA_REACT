import React  from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contacts from "./components/contactus";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const AppLayout =()=>{
    return (
    <div className="app">
        <Header />
        <Body /> 
   </div>)
};
const appRouter =createBrowserRouter([
    {
  path :"/",
  element :<AppLayout /> ,
  errorElement:<Error />,
    },
    {
        path :"/about",
        element :<About />,
    },
    {
        path :"/contacts",
        element :<Contacts />,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));


// earlear we are directly rendering the AppLayout directly but now we are usin router provider with appRouter route for  different routes
root.render(<RouterProvider router={appRouter} />);