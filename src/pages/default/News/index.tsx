import { useEffect, useState } from 'react';
// COMPONENTS
import { emptyArticle } from './components/ArticlesData';
import DisplayArticles from './components/ArticlesList';
// INTERFACES
import { newsArticleProps } from './NewsProps';
// SERVICES
import { newsServices } from 'services/news';
// STYLES
import './News.scss';

const News = () => {
  const [articlesData, setArticlesData] = useState<newsArticleProps[]>([emptyArticle]);

  useEffect(() => {
    newsServices()
      .then((res) => setArticlesData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='genericContainer'>
      <div className='genericInnerContainer'>
        <div className='masonry'>
          <DisplayArticles data={articlesData} />
        </div>
      </div>
    </div>
  );
};

export default News;
