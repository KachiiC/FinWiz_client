// INTERFACES
import { NewsColumn } from '../ProfileInterfaces';
// STYLES
import '../Profile.scss';

const UserNewsColumn = ({ data }: NewsColumn) => {
  const displayNews = data.map((article) => {
    const { key, className, content } = article;
    return (
      <div className={className} key={key}>
        {content}
      </div>
    );
  });

  return (
    <div className='genericContainer'>
      <div className='genericInnerContainer'>
        <h1>Portfolio News</h1>
        <div className='userNewsWrapper '>
          <div className='grid-wrapper '>{displayNews}</div>
        </div>
      </div>
    </div>
  );
};

export default UserNewsColumn;
