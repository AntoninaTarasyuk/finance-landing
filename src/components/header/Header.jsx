import './Header.scss';
import Container from '../container/Container';
import Nav from './Nav';
import Logo from './Logo';

function Header() {
  return (
    <header className='header'>
      <Container>
        <div className='header-wrap'>
          <Logo />
          <Nav />
        </div>
      </Container>
    </header>
  );
}

export default Header;
