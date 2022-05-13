import { newsArticleProps } from '../NewsProps';

const SingleArticle = (article: newsArticleProps) => {
  const { title, url, image } = article;

  return (
    <div className='mItem' key={title}>
      <div className='article-container'>
        <a href={url} target='_blank' rel='noreferrer'>
          <div className='article-image-container'>
            <img src={image} />
            <div className='article-overlay'>
              <div className='article-text'>{title}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

const DisplayArticles = (props: { data: newsArticleProps[] }) => {
  const displayedArticles = props.data.map((article) => {
    const { title, url, image } = article;

    const singleArticleArgs = { title, url, image };

    return <SingleArticle key={title} {...singleArticleArgs} />;
  });

  return <>{displayedArticles}</>;
};

export default DisplayArticles;
