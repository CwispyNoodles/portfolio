import PropTypes from 'prop-types'
import Navbar from "../components/Navbar";

function Header(props){
    const title = props.title;

    return(
        <header className="header">
            <h1>{title}</h1>
            <Navbar></Navbar>
        </header>
    )
}

Header.proptypes = {
    title: PropTypes.string
}

Header.defaultProps = {
    title: "PLACEHOLDER"
}

export default Header