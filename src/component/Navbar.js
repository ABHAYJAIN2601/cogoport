import { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
  }
  }, [])
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  return (
    <div className='header'>
      <span className='header-left'>
        <img src='./burger.svg' onClick={toggleNav} className="btn" alt='burger'/>
      <img className='logo'src='./cogoport_logo.svg' alt='logo'/>
      </span>
      {/* <div className='header-left'>
    

      </div> */}
      {(toggleMenu || screenWidth > 820) && (<div className='navbar-items'>

        <span className='items'> <span >Products</span><img src='./arrow-drop-down.svg' alt='dropdown-arrow'/>
        </span>
        <span className='items'> <span >Partners</span><img src='./arrow-drop-down.svg' alt='dropdown-arrow'/>
        </span>
        <span className='items'> <span >Tools</span><img src='./arrow-drop-down.svg' alt='dropdown-arrow'/>
        </span>
        <span className='items'> <span >Company</span><img src='./arrow-drop-down.svg' alt='dropdown-arrow'/>
        </span>
        <span className='items'> <span >Knowledge Center</span><img src='./arrow-drop-down.svg' alt='dropdown-arrow'/>
        </span>
        <span className='items'> <span >Contact Us</span><img src='./arrow-drop-down.svg' alt='dropdown-arrow'/>
        </span>
        {/* <p className='items'>Partners</p>
        <p className='items'>Tools</p>
        <p className='items'>Company</p>
        <p className='items'>Knowledge Center</p>
        <p className='items'>Contact Us</p> */}
        <button className='btn-red items'>sign up</button>
      </div>)}
        {/* <div className='header-right'>
         
        </div> */}
    </div>
  );
}

export default Navbar;
