import { Link } from "react-router"
function Navbar (){

   const Style = {
        display : "inline"
    }

return (
<nav>
<ul> 
    <li style={Style}> <Link to = "/"> Home </Link></li> &nbsp; 
    <li style={Style}> <Link to = "/about"> About </Link></li>  &nbsp; 
    <li style={Style}> <Link to = "/contact"> Contact </Link></li> &nbsp; 
    <li style={Style}> <Link to = "/orders"> Orders </Link></li>  &nbsp; 
</ul>

</nav>
    
)

}export default Navbar