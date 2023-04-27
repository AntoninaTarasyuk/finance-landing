import './Feedback.scss';
import Container from '../container/Container';
import FeedbackForm from './feedbackForm/FeedbackForm';

function Feedback() {
  return (
    <section id='feedback' className='feedback-section'>
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
