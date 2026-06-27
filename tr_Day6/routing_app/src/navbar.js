import { Link } from "react-router-dom";

function Nav(){
    return(
        <div id="navbar" className="navbar">
        <h2>Routing</h2>
        <nav>
            <Link to="/">Home</Link> |
            <Link to="/about">About</Link> |
            <Link to="/services">Services</Link> |
            <Link to="/contact">Contact</Link> 
        </nav>
        </div>
    );
}
export default Nav;