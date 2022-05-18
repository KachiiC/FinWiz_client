import Images from 'assets/images';

interface SingleProductProps {
  title: string;
  description: string;
  image: string;
}

const { Kachi, Nick, Tom, Silky } = Images;

const teamData = [
  {
    title: 'Kachi Cheong',
    description: 'Full Stack role, designed the data structure, api integrations and models',
    image: Kachi,
  },
  {
    title: 'Nick Allen',
    description: 'Front End, desgined the UX, page structures and visual design.',
    image: Nick,
  },
  {
    title: 'Silky Ng',
    description: 'Backend Developer, designed the schemas, controllers and ',
    image: Tom,
  },
  {
    title: 'Tom Broad',
    description: 'Front End, designed the logic and functionality of the pages.',
    image: Silky,
  },
];

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
      <h1>About The Team</h1>
      <div className='team-list-container'>{displayImages}</div>;
    </div>
  );
};

export default MeetTheTeam;
