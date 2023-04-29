import './Feedback.scss';
import Container from '../container/Container';
import FeedbackForm from './feedbackForm/FeedbackForm';

function Feedback() {
  return (
    <section id='feedback' className='feedback-section'>
      <picture>
        <source srcSet='../src/assets/home/contact.webp 1x, ../src/assets/home/contact@2x.webp 2x' type='image/webp' />
        <img
          className='feedback-img'
          src='../src/assets/home/contact.jpg'
          srcSet='../src/assets/home/contact@2x.jpg 2x'
          alt='Man with smartphone'
          loading='lazy'
        />
      </picture>
      <Container>
        <div className='feedback-wrap'>
          <h2 className='feedback-header'>Request Callback</h2>
          <FeedbackForm />
        </div>
      </Container>
    </section>
  );
}

export default Feedback;
