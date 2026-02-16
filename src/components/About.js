import Users from "./User"
import UserClass  from "./UserClass"
const About = ()=>{
    return(<div>
        <h1>About</h1>
        <h2>This is about the about page ......</h2>
        <Users />
        <UserClass name ={"ajith Class"} location ={"mancherial"}  contact ={"conatct from class"} />
    </div>)
}
export default About