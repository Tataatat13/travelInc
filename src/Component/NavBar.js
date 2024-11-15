import './NavbarStyle.css';
import { Link } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import { useState } from 'react';

function NavBar () {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className='navbarItems'>
          
        <h2 className='navbar-logo'>Travel Inc</h2>
          <button className='menu-button' onClick={toggleMenu}>
          <BiMenu size={40} />
          </button>
          <div className={`nav-menu ${menuOpen ? 'active' : 'nav-menu'}`} >
            <Link to="/" className='link'onClick={toggleMenu}>Home</Link>
            <Link to="/about" className='link' onClick={toggleMenu}>About</Link>
            <Link to="/tours" className='link' onClick={toggleMenu}>Tours</Link>
            <Link to="/contacts" className='link' onClick={toggleMenu}>Contacts</Link>
          </div>
      </nav>
    )
}
export default NavBar;