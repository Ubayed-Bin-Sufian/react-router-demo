// NavLink receives an active class when the link is the current route
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav>            
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
        </nav>
    )
}