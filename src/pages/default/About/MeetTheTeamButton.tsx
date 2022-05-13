// Imports
import { useState } from 'react';
import MeetTheTeam from './MeetTheTeam';


const MeetTheTeamButton = () => {


  const [showing, setShowing] = useState(false);
  const showTeam = () => {
    console.log(showing);
    return setShowing(!showing);
  };

  return (
    <>
      { !showing && <button onClick={showTeam} className='aboutTeamButton'>Meet the team</button> }
      { showing && <MeetTheTeam showTeam={showTeam} /> }
    </>
  );
};

export default MeetTheTeamButton;