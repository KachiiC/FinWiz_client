import { useEffect, useState } from 'react';
// CSS
import './News.scss';
// HELPERS
import { removeNulls } from 'helpers/object.helpers';
// COMPONENTS
import { emptyArticle } from './components/ArticlesData';
import DisplayArticles from './components/ArticlesList';
// PROPS
import { newsArticleProps } from './NewsProps';

const News = () => {
  const [articlesData, setArticlesData] = useState<newsArticleProps[]>([emptyArticle]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/news')
      .then((res) => res.json())
      .then((res) => removeNulls(res))
      .then((res) => setArticlesData(res))
      .catch((err) => console.log(err));
  }, []);
  console.log(articlesData);

  return (
    <div className="genericContainer">
      <div className="genericInnerContainer">
        <div className='masonry'>
          <DisplayArticles data={articlesData} />
        </div>
      </div>
    </div>
  );
};

export default News;
