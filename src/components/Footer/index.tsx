// COMPONENTS
import { FooterIcons } from './components/FooterIcons';
// STYLES
import './Footer.scss';

const Footer = () => (
  <footer className='mainFooter'>
    <FooterIcons />
    <p className='footerCopyright'> &copy; FinWiz 2022 </p>
  </footer>
);

export default Footer;
