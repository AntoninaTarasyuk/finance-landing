import './Footer.scss';
import Container from '../container/Container';
import SocialList from '../socials/Socials';

function Footer() {
  const year = new Date().getUTCFullYear();

  return (
    <footer className='footer'>
      <Container>
        <SocialList className='footer-socials' />
        <p className='footer-text'>
          Copyright &copy; {year} - FinanceLedger
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
