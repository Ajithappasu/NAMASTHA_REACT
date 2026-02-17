import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contacts from "./components/contactus";
import Error from "./components/Error";
import RestarentMenu from "./components/RestarentMenu";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";



const AppLayout =()=>{
    return (
    <div className="app">
        <Header />
        <Outlet /> 
   </div>)
};
// Outlet will help us  chage the the body of the code dynamically. with the childeren routes 
const appRouter =createBrowserRouter([
    {
  path :"/",
  element :<AppLayout /> ,
  children :[
    {
        path:"/",
        element:<Body />,
    },
   
    {
        path :"/about",
        element :<About />,
    },
    {
        path :"/contacts",
        element :<Contacts />,
    },
    {
        path:"/restarent/:resId",
        element:<RestarentMenu />
    }
],
  errorElement:<Error />,
},
])

const root = ReactDOM.createRoot(document.getElementById("root"));


// earlear we are directly rendering the AppLayout directly but now we are usin router provider with appRouter route for  different routes
root.render(<RouterProvider router={appRouter} />);