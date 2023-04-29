import './Team.scss';
import Container from '../container/Container';
import TeamList from './TeamList';

function Team() {
  return (
    <section id='team' className='team-section'>
      <Container>
        <p className='team-text'>Who we are</p>
        <h2 className='team-header'>Our Professional Team</h2>
        <p className='team-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
        <TeamList />
      </Container>
    </section>
  );
}

export default Team;
