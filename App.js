import React  from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id :"heading"},"hello from react create element");

console.log(heading);
// if we want to write JSX in multiple lines we have to wrap it in  paratasis ()
// const jsxHeading = (<h1 id ="heading"  className="Main">
//     hello from jsx 
//     </h1>);

const number =1000;
// to write a java Script variable inside a java script  we use  {variable}.
// this can also be written without return 
 const FunctionalHeading =()=>(
    <div id="container">
        <h1>heloo without return {number}{console.log("hello")}</h1>
        </div>);
        // if any one try to send malesious data  javaScript will sanitize data  so no attack possible


        //  <FunctionalHeading  />
        // {FunctionalHeading()}
        // <FunctionalHeading></FunctionalHeading>
        // all the things are same   
// react functional component 
 const HeadingFunctional = ()=>{
    return(<div> 
        <FunctionalHeading  />
        <h1>hello from react function</h1>
        </div>);
 };
 // this is also callled   component compozision
 
const root = ReactDOM.createRoot(document.getElementById("root"));
// we have to vrap it in div to render 
root.render(<HeadingFunctional/>);