import Users from "./User"
import UserClass  from "./UserClass"
import { Component } from "react"
class About extends Component{
    constructor(props){
    super(props);

    }
    componentDidMount(){
        // this componetDidMount will run only after  the relative render menthod and its child methods are fully complete 
        // this is same like useEffect in functional component callled only after the  page is rendered 
  
    }
    render(){
         return(<div>
        <h1>About</h1>
        <h2>This is about the about page ......</h2>
        <UserClass name ={"ajith Class"} location ={"mancherial"}  contact ={"conatct from class"} />
    </div>)
    }
}
export default About