import { Link } from 'react-router-dom';
import Images from 'assets/images';

const { Laptop, ScreenShot, Kachi, Nick, Tom, Silky } = Images;

export const AboutDesc1 = {
  title: 'Browse trending investments now!',
  description: 'Check the top stock and crypto now, as well as live prices for commodities.',
  image: ScreenShot,
  button: <Link to='/browse/stock'>Browse Now</Link>,
};
export const AboutDesc2 = {
  title: 'Track your portfolio!',
  description: 'Wherever you are track your investments in real time on one platform.',
  image: Laptop,
  button: <a href=''>Start Now</a>,
};

export const teamData = [
  {
    title: 'Kachi Cheong',
    description: 'Full Stack Developer: designed the data structures, api integrations and models',
    image: Kachi,
  },
  {
    title: 'Nick Allen',
    description: 'Frontend Developer: designed the UX, page structures and visual design.',
    image: Nick,
  },
  {
    title: 'Silky Ng',
    description: 'Backend Developer: designed the schemas, controllers and routes.',
    image: Silky,
  },
  {
    title: 'Tom Broad',
    description: 'Frontend Developer: created the logic and designed the page functionalities.',
    image: Tom,
  },
];
