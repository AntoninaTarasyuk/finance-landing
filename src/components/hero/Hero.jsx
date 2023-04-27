import './Hero.scss';
import Container from '../container/Container';
import arrowRight from '../../assets/arrow-right.svg';

function Hero() {
  return (
    <section id='hero' className='hero-section hero-overlay'>
      <Container>
        <h1 className='hero-header'>The Sky Is The Limit</h1>
        <p className='hero-text'>We provide world class financial assistance</p>
        <button className='hero-btn' type='button'>
          <img src={arrowRight} alt='' width='9px' height='18px' />
          <p>Read More</p>
        </button>
      </Container>
    </section>
  );
}

export default Hero;
