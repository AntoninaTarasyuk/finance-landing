import './Cases.scss';
import Container from '../container/Container';
import CasesList from './CasesList';

function Cases() {
  return (
    <section id='cases' className='cases-section'>
      <Container>
        <p>This is what we do</p>
        <h2 className='cases-header'>Business Cases</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
        <CasesList />
      </Container>
    </section>
  );
}

export default Cases;
