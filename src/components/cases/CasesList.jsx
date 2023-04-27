import './CasesList.scss';
import cases1 from '../../assets/cases/cases1.jpg';
import cases2 from '../../assets/cases/cases2.jpg';
import cases3 from '../../assets/cases/cases3.jpg';
import cases4 from '../../assets/cases/cases4.jpg';
import cases5 from '../../assets/cases/cases5.jpg';
import cases6 from '../../assets/cases/cases6.jpg';
import cases7 from '../../assets/cases/cases7.jpg';
import cases8 from '../../assets/cases/cases8.jpg';

function CasesList() {
  return (
    <ul className='cases-list'>
      <li>
        <img className='cases-img' src={cases1} alt='People in a meeting' />
      </li>
      <li>
        <img className='cases-img' src={cases2} alt='Woman with laptop' />
      </li>
      <li>
        <img className='cases-img' src={cases3} alt='Writing in notepad' />
      </li>
      <li>
        <img className='cases-img' src={cases4} alt='Three skyscrapers' />
      </li>
      <li>
        <img className='cases-img' src={cases5} alt='Shaking hands' />
      </li>
      <li>
        <img className='cases-img' src={cases6} alt='Happy people in office' />
      </li>
      <li>
        <img className='cases-img' src={cases7} alt='Shaking hands' />
      </li>
      <li>
        <img className='cases-img' src={cases8} alt='Happy people in office' />
      </li>
    </ul>
  );
}

export default CasesList;
