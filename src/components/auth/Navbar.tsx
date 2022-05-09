// Imports
import { Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';

// Local imports
import ProfileImg from '../../assets/icons/profile.svg';
import AddImg from '../../assets/icons/add.svg';
import BrowseImg from '../../assets/icons/search.svg';
import LogoutImg from '../../assets/icons/logout.svg';
import BurgerImg from '../../assets/icons/menu.svg';

// Styles
import './styles/Navbar.scss';

const Navbar = () => {

  const handleClickAdd = ({ key }: any) => {
    // todo - route to add investments page
    console.log(key, 'clicked!');
  };

  const handleMenuClick = () => {
    const mobileLinks = document.getElementById('mobileNavLinks');
    const hamburger = document.getElementById('hamburgerIcon');
    if(!mobileLinks || !hamburger) return;
    const display = window.getComputedStyle(mobileLinks, null).display;

    // flip the display property of the mobile menu links
    if(display === 'none') {
      mobileLinks.style.display = 'flex';
      hamburger.style.border = '1px solid white';
    } else {
      mobileLinks.style.display = 'none';
      hamburger.style.border = '1px solid var(--background-primary)';
    }
  };

  const logout = () => {
    // todo - logout user
    console.log('logout');
  };

  const menuStyle = {
    backgroundColor: '#09111A',
    border: 'solid 1px lightgray'
  };

  const menu = (
    <Menu
      theme='dark'
      style={menuStyle}    
      onClick={handleClickAdd}
      items={[
        {
          label: 'Stocks',
          key: 'stock',
        },
        {
          label: 'Crypto',
          key: 'crypto',
        },
        {
          label: 'NFT',
          key: 'nft',
        },
      ]}
    />
  );
  
  return (
    <>
      <header className="mainHeader">
        <nav className="topNavbar">
          <Link to="/">
            <h1 className="logo">FinWiz</h1>
          </Link>

          <ul className="navLinks">

            <li className='navLink' >
              <Link to="/profile" className='link' >
                <img className="navIcon" src={ProfileImg} alt="profile" />
              Profile
              </Link>
            </li>

            <Dropdown overlay={menu}>
              <li className="navLink">
                <a className='drop' onClick={e => e.preventDefault()}>
                  <img className="navIcon" src={AddImg} alt="add-investment" />
                Add
                </a>
              </li>
            
            </Dropdown>   

            <li className='navLink'>
              <Link to="/browse" className='link' >
                <img className="navIcon" src={BrowseImg} alt="browse" />
              Browse
              </Link>
            </li>
    
            <li className="navLink" onClick={logout}>
              <Link to="/" className='link' >
                <img className="navIcon" src={LogoutImg} alt="logout" />
              Logout
              </Link>       
            </li>
          
          </ul>
        </nav>    
      </header>

      <header className="mobileHeader">
        <nav className="mobileNav">
          <Link to="/">
            <h1 className="logo">FinWiz</h1>
          </Link>
          <img className="hamburgerIcon" id="hamburgerIcon" src={BurgerImg} alt="menu" onClick={handleMenuClick} />
        </nav>

        <div className="mobileNavLinks" id="mobileNavLinks">
          <Link to="/profile" className="mobileLink" onClick={handleMenuClick}>
            <img className="navIcon" src={ProfileImg} alt="profile" />
            Profile
          </Link>

          <Link to="/projects" className="mobileLink subLink" onClick={handleMenuClick}>
            <img className="navIcon" src={AddImg} alt="add-investment" />
            Add
          </Link>

          <Link to="/browse" className="mobileLink" onClick={handleMenuClick}>
            <img className="navIcon" src={BrowseImg} alt="browse" />
            Browse
          </Link>

          <Link to="/" className="mobileLink" onClick={handleMenuClick}>
            <img className="navIcon" src={LogoutImg} alt="logout" />
            Logout
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;