import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

const Navbar=() =>{
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };
    return (
        <nav className='navbar'>
        <Link to='/vishnu_shanmugam' className='navbar-logo' onClick={closeMobileMenu}>
        Vishnu Shanmugam
          </Link>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
            <Link to='/vishnu_shanmugam' className='nav-links' onClick={closeMobileMenu}>
              
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          
          <li
                className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave} >
               
               <button
                    className='nav-button '
                    onClick={closeMobileMenu}>
                    Gallery <i className='fas fa-caret-down' />
                </button>

                {dropdown && <Dropdown />}
                
                
          </li>
          
          
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          
        </ul>
        
      </nav>
    )
}

export default Navbar
