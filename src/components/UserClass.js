import React from "react";

class UserClass extends React.Component{
constructor(props){
    super(props)
console.log("constructor called "); // 1
this.state={
    userInfo :{
        name : "ajith",
        location:"mncl",
    }
};
}
 async componentDidMount(){
    console.log("componenetDidMount");/// 3
 const data =  await fetch("https://api.github.com/users/akshaymarch7");
 const json = await data.json();
 this.setState({
    userInfo: json,
 })
}
componentDidUpdate(){
    console.log("componentDidUpdate"); // 5 
       this.hi=  setInterval(()=>{
 console.log("set Interval time OUT");
    }, 1000);
}
componentWillUnmount(){
    console.log("componentWillUnmount"); // 6
      clearInterval(this.hi);
}
    render(){
        console.log("render methd called");// 2  4 
        const {name, location} = this.state.userInfo;
        return( <div className="user-card">
        <h2>Name :{name}</h2>
        <h3>Location : {location}</h3>
        <h3>Contacts : "hello</h3>
    </div>);
    }
}
export default UserClass;

/*the  order of the execution of the class component is 
    constructor called   : callled before  even the page got  rendered  
    render methd called :  callled  initially but will be called every time the  State variable is updated
    componenetDidMount  :   called after the first rendere method 
    render methd called
    componentDidUpdate" : this is called after every render method is updated and runed again 
    componentWillUnmount : this will be cleed whwn the component is colsed . or leaving the page 
  */