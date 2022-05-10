// Local imports
import DesktopNavbarAuth from './DesktopNavbarAuth';
import MobileNavbarAuth from 'components/auth/MobileNavbarAuth';

const AuthNavbar = () => {
  return (
    <>
      <DesktopNavbarAuth />
      <MobileNavbarAuth />
    </>
  );
};

export default AuthNavbar;