// Imports
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';


// Local imports
import ProfileImg from 'assets/icons/profile.svg';
import AddImg from 'assets/icons/add.svg';
import BrowseImg from 'assets/icons/search.svg';
import LogoutImg from 'assets/icons/logout.svg';

const DesktopNavbarAuth = () => {

  const { logout } = useAuth0();

  const handleLogout = () => {
    return logout({ returnTo: window.location.origin });
  };

  const handleClickAdd = ({ key }) => {
    // todo - route to add investments page
    console.log(key, 'clicked!');
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
                  Investments
                </a>
              </li>          
            </Dropdown>   

            <li className='navLink'>
              <Link to="/browse" className='link' >
                <img className="navIcon" src={BrowseImg} alt="browse" />
                Browse
              </Link>
            </li>

            <li className="navLink" onClick={handleLogout}>
              <Link to="/" className='link' >
                <img className="navIcon" src={LogoutImg} alt="logout" />
                Logout
              </Link>       
            </li>
            
          </ul>
        </nav>    
      </header>
    </>
  );
};


export default DesktopNavbarAuth;