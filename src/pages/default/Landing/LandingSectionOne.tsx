import { useAuth0 } from '@auth0/auth0-react';

const LandingSectionOne = () => {
  const { user } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div className='landingSectionOneContainer'>
        <div className='landingSectionOneLeft'>
          <div>
            <h1>FinWiz</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officia optio voluptate
              dolores quos illum velit. Ea officia optio voluptate dolores quos illum velit aut
              minus ad.
            </p>
          </div>
          {!user && (
            <button className='landingLoginButton' onClick={loginWithRedirect}>
              Login
            </button>
          )}
        </div>
        <div className='landingSectionOneRight'>
          <p>Some cool background objects</p>
        </div>
      </div>
    </>
  );
};

export default LandingSectionOne;
