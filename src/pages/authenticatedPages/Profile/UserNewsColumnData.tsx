// Local Imports
import UserNewsColumn from './UserNewsColumn';
import newsData from 'data/newsData';

const UserNewsColumnData = () => {

  const newsElements = [
    {
      className: 'tall',
      key: 0,
      content: <p>News element failed to load</p>
    },
    {
      key: 1,
      content: <p>News element failed to load</p>
    },
    {
      key: 2,
      content: <p>News element failed to load</p>
    },
    {
      className: 'wide',
      key: 3,
      content: <p>News element failed to load</p>
    },
    {
      key: 4,
      content: <p>News element failed to load</p>
    },
    {
      className: 'tall',
      key: 5,
      content: <p>News element failed to load</p>
    },
    {
      key: 6,
      content: <p>News element failed to load</p>
    },
    {
      className: 'wide',
      key: 7,
      content: <p>News element failed to load</p>
    }
  ];

  newsData.map((article, index) => { 
    newsElements[index].content = (
      <a href={article.url}>
        <p>{article.title}</p>
        <img src={article.image} />
      </a>
    );
  });

  return (
    <UserNewsColumn data={newsElements} /> 
  );
};

export default UserNewsColumnData;