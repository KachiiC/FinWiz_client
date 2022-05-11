// Local imports
import DesktopNavbarAuth from './DesktopNavbarAuth';
import MobileNavbarAuth from 'components/authenticatedComponents/MobileNavbarAuth';

const AuthNavbar = () => {
  return (
    <>
      <DesktopNavbarAuth />
      <MobileNavbarAuth />
    </>
  );
};

export default AuthNavbar;