import { Link } from "react-router-dom";
const Navbar = () => {
    return (  
        <nav className="navbar">
            <img src="https://letsgrowmore.in/wp-content/uploads/2021/05/growmore-removebg-preview-768x314.png" alt="" width="100px"/>
            <a href='/'><h1>LetsGrowMore</h1></a>
            <div className="links">
            <Link to="/"
            className="btn"
            style={{
              color: "white",
              backgroundColor: "#f1356d",
              borderRadius: "8px"}}> Home</Link>
            
            <Link to="/users"
            className="btn"
            style={{
              color: "white",
              backgroundColor: "#f1356d",
              borderRadius: "8px"}}>Get Users</Link>
       
            </div>
          
        </nav>
    );
}
 
export default Navbar;