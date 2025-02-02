import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            <Link to="/">Home</Link><br />
            <Link to="/Projects">Projects</Link><br />
            <Link to="/About">About</Link><br />
            <Link to="/Contact">Contact</Link><br />
            <Link to="/Resume">Resume</Link>
        </>
    );
}

export default Navbar