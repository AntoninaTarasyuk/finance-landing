import './TeamList.scss';
import person1 from '../../assets/team/person1.jpg';
import person2 from '../../assets/team/person2.jpg';
import person3 from '../../assets/team/person3.jpg';

function TeamList() {
  return (
    <ul className='team-list'>
      <li className='team-item'>
        <img className='team-img' src={person1} alt='A man named John Doe' />
        <h3 className='team-name'>John Doe</h3>
        <p className='team-position'>President</p>
      </li>
      <li className='team-item'>
        <img className='team-img' src={person2} alt='A woman named Jane Doe' />
        <h3 className='team-name'>Jane Doe</h3>
        <p className='team-position'>Vice President</p>
      </li>
      <li className='team-item'>
        <img className='team-img' src={person3} alt='A man named Steve Smith' />
        <h3 className='team-name'>Steve Smith</h3>
        <p className='team-position'>Marketing Head</p>
      </li>
    </ul>
  );
}

export default TeamList;
