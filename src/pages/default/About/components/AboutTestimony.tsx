import { SingleTestimonyProps } from '../AboutInterfaces';
import Images from 'assets/images';

const { Omar, Gabe, Arisa, Ray } = Images;

const aboutTestimonyData = [
  {
    quote: 'When i\'m in Dubai, I can check my investments on FinWiz in real time, it\'s quick, free and easy to use!',
    image: Omar,
    person: 'Omar from Dubai',
  },
  {
    quote: 'Finwiz is awesome, it puts the the fine ass in finance, I wish people told me about using it sooner!',
    image: Gabe,
    person: 'Babe Levin',
  },
  {
    quote: 'I refered my friend Nick to FinWiz, it\'s been a week I\'m still waiting on the referral bonus that I was promised. ',
    image: Arisa,
    person: 'Queen Arisa',
  },
  {
    quote: 'In a world where everything will eventually turn into crabs, this is the one thing I trust will stay the same!',
    image: Ray,
    person: 'Rayomd Krab',
  },
];

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
