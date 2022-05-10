// Local imports
import DesktopNavbarDefault from './DesktopNavbarDefault';
import MobileNavbarDefault from './MobileNavbarDefault';

// Styles
import './styles/DefaultNavbar.scss';

const DefaultNavbar = () => {
  
  return (
    <>
      <MobileNavbarDefault />
      <DesktopNavbarDefault />
    </>
  );
};

export default DefaultNavbar;