import './Navbar.css';

function Navbar() {
  return (
    <div className='background-section header'>
      <div className='header-left'>
    <img className='logo'src='./cogoport_logo.svg' alt='logo'/>
      </div>
      <div className='navbar-items'>
      <p className='items'>Products</p>
        <p className='items'>Partners</p>
        <p className='items'>Tools</p>
        <p className='items'>Company</p>
        <p className='items'>Knowledge Center</p>
        <p className='items'>Contact Us</p>
      </div>
        <div className='header-right'>
          <button>sign up</button>
        </div>
    </div>
  );
}

export default Navbar;
