import { teamData } from '../AboutData';
import { SingleProductProps } from '../AboutInterfaces';

const SingleProductCard = ({ title, description, image }: SingleProductProps) => {
  return (
    <div className='team-list-card'>
      <figure className='team-list-card-thumb'>
        <img src={image} alt={title} />
        <figcaption className='team-list-card-caption'>
          <h2>{title}</h2>
          <p>{description}</p>
        </figcaption>
      </figure>
    </div>
  );
};

const MeetTheTeam = () => {
  const displayImages = teamData.map((product) => {
    const { title, description, image } = product;

    const SingleProductArgs = {
      title,
      description,
      image,
    };

    return (
      <div key={title}>
        <SingleProductCard {...SingleProductArgs} />
      </div>
    );
  });

  return (
    <div className='about-team-container'>
      <h1>Meet The Team</h1>
      <div className='team-list-container'>{displayImages}</div>
    </div>
  );
};

export default MeetTheTeam;
