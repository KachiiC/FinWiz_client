// Import 
import { Link } from 'react-router-dom';
// Local Imports
import GitHub from 'assets/icons/github.png';
import LinkedIn from 'assets/icons/linkedin.png';
// Styles
import './styles/Footer.scss';
import ContactImg from 'assets/icons/contact.svg';

const Footer = () => {

  return (
    <footer className="mainFooter">
      <ul className='footerLinks'>
        <li>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
            <img className='footerIcon' src={LinkedIn}/>
          </a>
        </li>
        <li>
          <a href="https://github.com/KachiiC/FinWiz_client" target="_blank" rel="noreferrer">
            <img className='footerIcon' src={GitHub}/>
          </a>
        </li>
        <li>
          <Link to="/contact" className='link' >
            <img className='footerIcon'  src={ContactImg} />
          </Link>
        </li>
      </ul>
      <p className="footerCopyright"> &copy; FinWiz 2022  </p>
    </footer>
  );
};

export default Footer;