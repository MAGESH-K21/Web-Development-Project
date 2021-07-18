import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 

        <div className="not-found home">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back to the Home Page.....</Link>
        </div>
     );
}
 
export default NotFound;