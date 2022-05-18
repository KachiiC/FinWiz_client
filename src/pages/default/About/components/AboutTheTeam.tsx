interface SingleProductProps {
  title: string;
  description: string;
  image: string;
}

const teamData = [
  {
    title: 'Kachi',
    description: 'Full Stack',
    image: 'https://picsum.photos/500/300?random=1',
  },
  {
    title: 'Nick',
    description: 'Front End',
    image: 'https://picsum.photos/500/300?random=1',
  },
  {
    title: 'Silky',
    description: 'Backend',
    image: 'https://picsum.photos/500/300?random=1',
  },
  {
    title: 'Tom',
    description: 'Front End',
    image: 'https://picsum.photos/500/300?random=1',
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
