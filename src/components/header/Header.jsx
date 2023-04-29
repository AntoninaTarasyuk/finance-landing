import { useState, useEffect } from 'react';
import './Header.scss';
import Container from '../container/Container';
import Nav from './Nav';
import Logo from './Logo';

function Header() {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // console.log(scroll);
  return (
    <header className='header' style={{ backgroundColor: scroll > 70 ? 'rgba(0, 0, 0, 0.4)' : 'transparent' }}>
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
