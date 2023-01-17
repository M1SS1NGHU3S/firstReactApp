import reactLogo from "../img/react-logo.png";

function NavBar() {
    return (
        <nav id="navbar">
            <div id="logo">
                <img src={reactLogo} className="logo--img" alt="React Logo" />
                <h3 className="logo--text">ReactFacts</h3>
            </div>
            <h4 className="nav--nav_text">React Course - Project 1</h4>
        </nav>
    )
}

export default NavBar;