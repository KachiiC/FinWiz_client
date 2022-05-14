import Tom from 'assets/images/Tom.png';
import Nick from 'assets/images/Nick.png';
import Kachi from 'assets/images/Kachi.png';
import Silky from 'assets/images/Silky.png';

interface propsInterface {
  showTeam(): void;
}

const MeetTheTeam = (props: propsInterface) => {
  
  return (
    <>
      <div className='aboutTeamContainer'>
        <div className='aboutTeamInnerContainer'>
          <div>
            <img className='teamImg' src={Tom}/>
            <p>Tom</p>
          </div>
          <div>
            <img className='teamImg' src={Nick}/>
            <p>Nick</p>
          </div>
          <div>
            <img className='teamImg' src={Kachi}/>
            <p>Kachi</p>
          </div>
          <div>
            <img className='teamImg' src={Silky}/>
            <p>Silky</p>
          </div>
        </div>
        <button onClick={props.showTeam} className='aboutTeamButton'>Close</button>
      </div>
    </>
  );
};

export default MeetTheTeam;