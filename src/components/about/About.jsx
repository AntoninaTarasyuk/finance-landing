import './About.scss';
import Container from '../container/Container';

function About() {
  return (
    <section id='about' className='about-section'>
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
