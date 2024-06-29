// NavLink receives an active class when the link is the current route
import { NavLink } from "react-router-dom"

export const Navbar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }

    return (
        <nav className='primary-nav'>            
            <NavLink style={navLinkStyles} to='/'>
                Home
            </NavLink>
            <NavLink style={navLinkStyles} to='/about'>
                About
            </NavLink>
            <NavLink style={navLinkStyles} to='/products'>
                Products
            </NavLink>
            <NavLink style={navLinkStyles} to='/profile'>
                Profile
            </NavLink>
        </nav>
    )
}