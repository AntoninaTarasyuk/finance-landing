import './Footer.scss';
import Container from '../container/Container';
import iconFB from '../../assets/iconFB.svg';
import iconTW from '../../assets/iconTW.svg';
import iconYT from '../../assets/iconYT.svg';
import iconLI from '../../assets/iconLI.svg';

function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <ul className='footer-socials'>
          <li>
            <a className='social-link' href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
              <img className='social-img' src={iconFB} alt='' width='35px' height='35px' />
            </a>
          </li>
          <li>
            <a className='social-link' href='https://www.twitter.com/' target='_blank' rel='noopener noreferrer'>
              <img src={iconTW} alt='' width='35px' height='35px' />
            </a>
          </li>
          <li>
            <a className='social-link' href='https://www.youtube.com/channel/' target='_blank' rel='noopener noreferrer'>
              <img src={iconYT} alt='' width='40px' height='35px' />
            </a>
          </li>
          <li>
            <a className='social-link' href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
              <img src={iconLI} alt='' width='31px' height='35px' />
            </a>
          </li>
        </ul>
        <p className='footer-text'>
          Copyright &copy; 2021 - FinanceLedger
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
