// Imports
import { Link } from 'react-router-dom';
// Local Imports
import ContactImg from 'assets/icons/contact.svg';
import CopyrightImg from 'assets/icons/copyright.svg';
// Styles
import './styles/Footer.scss';

const Footer = () => {

  return (
    <header className="mainFooter">
      <ul className="navLinks">

        <li className='navLink'>
          <Link to="/contact" className='link' >
            <img className="navIcon" src={ContactImg} alt="browse" />
              Contact
          </Link>
        </li>

        <li className="navLink">
          <img className="navIcon" src={CopyrightImg} alt="login" />
            FinWiz 2022  
        </li>
      </ul>
    </header>
  );
};

export default Footer;