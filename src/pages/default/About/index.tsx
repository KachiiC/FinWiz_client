// Local Imports
import StocksImg from 'assets/images/about-stocks-img.jpeg';
// Styles
import './about.scss';

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutTopLayer">
        <img className='aboutImg' src={StocksImg}/>
        <p className='aboutText'>In the modern era of investing keeping track of your portfolio can be overwhelming. Having investments shared across multiple applications is not a sustainable way of tracking your finances. We at FinWiz decided to change this. FinWiz is a place for you to regain control of your financial portfolio. Using our modern investment tracking tools you will be able to have a better overview of the most applicable markets to suit your investment needs. Invest smart, track with FinWiz.</p>
      </div>
      <div className="aboutBottomLayer">
        <button className='aboutTeamButton'>Meet the team</button>
      </div>
    </div>
  );
};

export default About;