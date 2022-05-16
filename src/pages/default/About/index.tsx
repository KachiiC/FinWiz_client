// IMAGES
import MeetTheTeamButton from './components/MeetTheTeamButton';
import Images from 'assets/images';
// STYLES
import './About.scss';

const About = () => {
  
  const { StocksGraph, StocksTable, PieChart } = Images;

  return (
    <>
      <div className='aboutHeader'>
        <div className='aboutHeaderBox'>
          <h1>Our Story</h1>
        </div>
      </div>
      <div className='aboutContainer'>
        <div className='aboutTopLayer'>
          <img className='aboutImg' src={StocksGraph} />
          <h2 className='aboutHeading'>Advanced Portfolio Tracking</h2>
        </div>
        <div className='aboutTopLayer'>
          <h2 className='aboutHeadingLeft'>Accurate Real Time Data</h2>
          <img className='aboutImgRight' src={StocksTable} />
        </div>
        <div className='aboutTopLayer'>
          <img className='aboutImg' src={PieChart} />
          <h2 className='aboutHeading'>Single Point Investment Management</h2>
        </div>
        <div className='aboutBottomLayer'>
          <div className='aboutTopLayerDescription'>
            <h3 className='aboutText'>
              In the modern era of investing, keeping track of your portfolio can be overwhelming.
              Having investments shared across multiple applications is not a sustainable way of
              tracking your finances. We at FinWiz decided to change this. FinWiz is a place for you
              to regain control of your financial portfolio. Using our modern investment tracking
              tools you will be able to have a better overview of the most applicable markets to
              suit your investment needs. Invest smart, track with FinWiz.
            </h3>
          </div>
          <div className='aboutButtonContainer'>
            <MeetTheTeamButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
