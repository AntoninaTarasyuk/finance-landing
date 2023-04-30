import './Feedback.scss';
import Container from '../container/Container';
import FeedbackForm from './feedbackForm/FeedbackForm';

import contact from '../../assets/home/contact.jpg';
import contact2x from '../../assets/home/contact@2x.jpg';
import contactw from '../../assets/home/contact.webp';
import contact2xw from '../../assets/home/contact@2x.webp';

function Feedback() {
  return (
    <section id='feedback' className='feedback-section'>
      <picture>
        <source srcSet={`${contactw} 1x, ${contact2xw} 2x`} type='image/webp' />
        <img
          className='feedback-img'
          src={contact}
          srcSet={`${contact2x} 2x`}
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
