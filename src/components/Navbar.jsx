import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <Link to="/" className="link">Home</Link><br />
            <Link to="/Projects" className="link">Projects</Link><br />
            <Link to="/About" className="link">About</Link><br />
            <Link to="/Contact" className="link">Contact</Link><br />
            <Link to="/Resume" className="link">Resume</Link>
        </div>
    );
}

export default Navbar