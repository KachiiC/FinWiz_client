import Images from 'assets/images';

interface propsInterface {
  showTeam(): void;
}

const MeetTheTeam = (props: propsInterface) => {
  
  const { Tom, Nick, Kachi, Silky } = Images;

  return (
    <>
      <div className='aboutTeamContainer'>
        <div className='aboutTeamInnerContainer'>
          <div>
            <img className='teamImg' src={Tom} />
            <p>Tom</p>
          </div>
          <div>
            <img className='teamImg' src={Nick} />
            <p>Nick</p>
          </div>
          <div>
            <img className='teamImg' src={Kachi} />
            <p>Kachi</p>
          </div>
          <div>
            <img className='teamImg' src={Silky} />
            <p>Silky</p>
          </div>
        </div>
        <button onClick={props.showTeam} className='aboutTeamButton'>
          Close
        </button>
      </div>
    </>
  );
};

export default MeetTheTeam;
