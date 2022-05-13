import Loaf from 'assets/images/Loaf.png';
import AllenonKey from 'assets/images/AllenonKey.png';
import Hacki from 'assets/images/Hacki.png';
import SilkySmooth from 'assets/images/SilkySmooth.png';

interface propsInterface {
  showTeam(): void;
}

const MeetTheTeam = (props: propsInterface) => {
  
  return (
    <>
      <div className='aboutTeamContainer'>
        <div className='aboutTeamInnerContainer'>
          <div>
            <img className='teamImg' src={Loaf}/>
            <p>Loaf</p>
          </div>
          <div>
            <img className='teamImg' src={AllenonKey}/>
            <p>Allen onKey</p>
          </div>
          <div>
            <img className='teamImg' src={Hacki}/>
            <p>Hacki</p>
          </div>
          <div>
            <img className='teamImg' src={SilkySmooth}/>
            <p>Silky Smooth</p>
          </div>
        </div>
        <button onClick={props.showTeam} className='aboutTeamButton'>Close</button>
      </div>
    </>
  );
};

export default MeetTheTeam;