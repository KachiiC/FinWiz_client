// EXTERNAL
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
// IMAGES
import Icons from 'assets/icons';
// Styles
import './Landing.scss';

const { SiteLogoSvg } = Icons;

const Landing = () => {
  const { user, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  return (
    <div className="landingContainer">
      <div className="landingCenter">
        <img className="landingLogo" src={SiteLogoSvg} alt="finwiz-logo" />
        {/* <h2 className='landingTag'>Welcome to FinWiz</h2> */}
        <h3>
        In the modern era of investing, keeping track of your portfolio can be overwhelming.
        Having investments shared across multiple applications is not a sustainable way of
        tracking your finances. We at FinWiz decided to change this.
        </h3>
        <h3>
        FinWiz is a place for you
        to regain control of your financial portfolio. Using our modern investment tracking
        tools you will be able to have a better overview of the most applicable markets to
        suit your investment needs. Invest smart, track with FinWiz.
        </h3>

        <div className="landingButtons">
          {!user &&
          <button className='landingButton' onClick={loginWithRedirect}>Login</button>
          }
          {user &&
          <button className='landingButton' onClick={() => navigate('/profile')}>Profile</button>
          }
          <button className='landingButton buttonRight' onClick={() => navigate('/about')}>About</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;