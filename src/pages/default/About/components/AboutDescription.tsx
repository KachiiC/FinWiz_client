import { ReactElement } from 'react';

interface SingleDescriptionProps {
  title: string;
  description: string;
  image: string;
  button: ReactElement<unknown>;
}

const AboutDescription = (props: SingleDescriptionProps) => {

  const { description, title, image, button } = props;
  
  return (
    <div className='about-description-component'>
      <section className='hero'>
        <div className='about-description-text'>
          <h1>{title}</h1>
          <p>{description}</p>
          {button}
        </div>
        <div className='about-description-image'>
          <img src={image} alt={title} />
        </div>
      </section>
    </div>
  );
};

export default AboutDescription;
