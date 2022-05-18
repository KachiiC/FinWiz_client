const aboutTestimonyData = [
  {
    quote:
      'Calvin: You know sometimes when I\'m talking, my words can\'t keep up with my thoughts... I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.\'',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg',
    person: 'Omar',
  },
  {
    quote:
      'Thank you. before I begin, I\'d like everyone to notice that my report is in a professional, clear plastic binder...When a report looks this good, you know it\'ll get an A. That\'s a tip kids. Write it down.',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample27.jpg',
    person: 'Leonardo',
  },
  {
    quote:
      'My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I\'ll accept any responsibility for my actions.',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg',
    person: 'Tim Bread',
  },
  {
    quote:
      'My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I\'ll accept any responsibility for my actions.',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg',
    person: 'Tim Bread',
  },
];

interface SingleTestimonyProps {
  quote: string;
  image: string;
  person: string;
}

const SingleTestimony = ({ quote, image, person }: SingleTestimonyProps) => {
  return (
    <figure className='about-testimony'>
      <blockquote>
        {quote}
        <div className='about-testimony-arrow' />
      </blockquote>
      <img src={image} alt={person} />
      <div className='about-testimony-author'>
        <h5>
          <span>{person}</span>
        </h5>
      </div>
    </figure>
  );
};

const AboutTestimony = () => {
  const renderTestimony = aboutTestimonyData.map((person) => (
    <div key={person.person}>
      <SingleTestimony {...person} />
    </div>
  ));
  return <div className='about-testimony-container'>{renderTestimony}</div>;
};

export default AboutTestimony;
