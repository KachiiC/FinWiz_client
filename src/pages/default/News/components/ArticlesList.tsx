import { newsArticleProps } from '../NewsProps';

const SingleArticle = ({ title, url, image }: newsArticleProps) => {
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
  const displayedArticles = props.data.map(({ title, url, image }) => {
    
    const singleArticleArgs = { title, url, image };

    return <SingleArticle key={title} {...singleArticleArgs} />;
  });

  return <>{displayedArticles}</>;
};

export default DisplayArticles;
