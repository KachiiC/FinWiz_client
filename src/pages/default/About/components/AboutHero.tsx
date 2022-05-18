import { Link } from 'react-router-dom';

const AboutHero = () => {
  const imageURL = 'https://images.unsplash.com/photo-1500417148159-68083bd7333a';

  const aboutStyle = {
    background: `url(${imageURL})`,
  };

  return (
    <div className='about-hero' style={aboutStyle}>
      <header className='about-hero-header'>
        <h1 className='about-hero-title'>The Finical Wizards got you covered</h1>
      </header>
      <div className='about-hero-footer'>
        <div className='about-button about-button-primary'>
          <Link to='/'>
            Start Now
          </Link>
        </div>
        <div className='about-button'>Browse Now</div>
      </div>
    </div>
  );
};

export default AboutHero;
