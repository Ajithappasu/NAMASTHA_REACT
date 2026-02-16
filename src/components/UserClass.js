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
}
componentWillUnmount(){
    console.log("componentWillUnmount"); // 6
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