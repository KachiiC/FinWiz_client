// IMAGES
// STYLES
import './About.scss';
import MeetTheTeam from './components/AboutTheTeam';
import AboutTestimony from './components/AboutTestimony';
import AboutDescription from './components/AboutDescription';
import { AboutDesc1, AboutDesc2 } from './AboutData';

const About = () => {

  return (
    <div className='about-container'>
      <AboutDescription {...AboutDesc1}/>
      <AboutTestimony />
      <AboutDescription {...AboutDesc2}/>
      <MeetTheTeam />
    </div>
  );
};

export default About;
