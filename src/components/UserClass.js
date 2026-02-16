import React from "react";

class UserClass extends React.Component{
constructor(props){
    super(props)
  console.log("chiled constructor");
    // in class component we have to declare the state variable in  constructure 
this.state={
    count1:1,
    count2:2,
};
}
componentDidMount(){
    console.log("child  component did mount");
}
    render(){
        console.log("child renderd ")
        const{name, location , contact}= this.props;
        // we have to get count variable  from  this.sate 
        const {count1, count2} = this.state;
        return( <div className="user-card">
            <h1> count1 : {count1}</h1>
       <h1> count2 : {count2}</h1>
       <button onClick={()=>{
        // to upadte a state variable in  class 
        this.setState({
            count1: this.state.count1+1,
            count2 : this.state.count2+1,
        });
       }}>button</button>
        <h2>Name :{name}</h2>
        <h3>Location : {location}</h3>
        <h3>Contacts : {contact}</h3>
    </div>);
    }
}
export default UserClass;