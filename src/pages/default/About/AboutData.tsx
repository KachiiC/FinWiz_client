import { Link } from 'react-router-dom';

const { Laptop, ScreenShot } = Images;
import Images from 'assets/images';

export const AboutDesc1 = {
  title: 'Browse trending investments now!',
  decsription: 'Check the top stock and crypto now, as well as live prices for commodities.',
  image: ScreenShot,
  button: <Link to='/browse/stock'>Browse Now</Link>,
};
export const AboutDesc2 = {
  title: 'Track your portfolio!',
  decsription: 'Wherever you are track your investments in real time on one platform.',
  image: Laptop,
  button: <a href=''>Start Now</a>,
};
