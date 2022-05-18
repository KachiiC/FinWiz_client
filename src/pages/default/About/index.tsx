// IMAGES
// import Images from 'assets/images';
// STYLES
import './About.scss';
import MeetTheTeam from './components/AboutTheTeam';
import AboutHero from './components/AboutHero';
import AboutTestimony from './components/AboutTestimony';

const About = () => {
  // const { StocksGraph, StocksTable, PieChart } = Images;

  return (
    <div className='about-container'>
      <AboutHero />
      <AboutTestimony />
      <MeetTheTeam />
    </div>
  );
};

export default About;
