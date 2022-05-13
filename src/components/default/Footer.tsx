// Local Imports
import GitHub from 'assets/icons/github.png';
import LinkedIn from 'assets/icons/linkedin.png';
// Styles
import './styles/Footer.scss';

const Footer = () => {

  return (
    <footer className="mainFooter">
      <p className="footerCopyright"> &copy; FinWiz 2022  </p>
      <ul className='footerLinks'>
        <li>
          <a href="https://github.com/KachiiC/FinWiz_client" target="_blank" rel="noreferrer">
            <img className='footerIcon' src={GitHub}/>
          </a>
        </li>
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
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
            <img className='footerIcon' src={LinkedIn}/>
          </a>
        </li>
      </ul>
      
    </footer>
  );
};

export default Footer;