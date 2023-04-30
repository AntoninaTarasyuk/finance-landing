import './About.scss';
import Container from '../container/Container';

import people from '../../assets/home/people.jpg';
import people2x from '../../assets/home/people@2x.jpg';
import peoplew from '../../assets/home/people.webp';
import people2xw from '../../assets/home/people@2x.webp';

function About() {
  return (
    <section id='about' className='about-section'>
      <picture>
        <source srcSet={`${peoplew} 1x, ${people2xw} 2x`} type='image/webp' />
        <img
          className='about-img'
          src={people}
          srcSet={`${people2x} 2x`}
          alt='People in the office'
          loading='lazy'
        />
      </picture>
      <Container>
        <div className='about-info'>
          <p className='about-text'>What you are looking for</p>
          <h2 className='about-header'>We provide bespoke solutions</h2>
          <p className='about-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
          <button className='about-btn' type='button'>Read More</button>
        </div>
      </Container>
    </section>
  );
}

export default About;
