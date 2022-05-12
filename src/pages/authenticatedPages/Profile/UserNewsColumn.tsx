// Local Imports
import './styles/userNewsColumn.scss';
import { NewsColumn } from 'interfaces/profile/INewsColumn';

const UserNewsColumn = (props: NewsColumn) => {

  
  const displayNews = props.data.map((article) => (
    <div className={article.className} key={article.key}> 
      {article.content}
    </div>
  ));

  return (
    <div className='genericContainer'>
      <div className='genericInnerContainer'>
        <div className="grid-wrapper ">
          {displayNews}
        </div>
      </div>
    </div>
  );
};

export default UserNewsColumn;