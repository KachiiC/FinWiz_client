// Local Imports
import UserNewsColumn from './UserNewsColumn';
import newsData from 'data/newsData';
import newsListGrid from './newListGrid';

const UserNewsColumnData = () => {

  newsData.forEach((article, index) => { 
    newsListGrid[index].content = (
      <a href={article.url} target="_blank" rel="noreferrer">
        <p>{article.title}</p>
        <img src={article.image} />
      </a>
    );
  });

  return (
    <UserNewsColumn data={newsListGrid} /> 
  );
};

export default UserNewsColumnData;