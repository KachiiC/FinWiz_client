import { footerData } from './FooterData';

export const FooterIcons = () => {
  
  const footerIconsList = footerData.map(({ type, link, icon }) => (
    <li key={type}>
      <a href={link} target='_blank' rel='noreferrer'>
        <img className='footerIcon' src={icon} />
      </a>
    </li>
  ));

  return <ul className='footerLinks'>{footerIconsList}</ul>;
};
