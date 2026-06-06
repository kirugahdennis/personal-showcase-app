import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className= "navbar">
            <NavLink to= "/">Home</NavLink>
              <NavLink to= "/shop">Shop</NavLink>
                <NavLink to= "/admin">Admin portal</NavLink>


        </nav>
    )
}

export default Navbar;