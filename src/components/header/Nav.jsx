import './Nav.scss';

function Nav() {
  return (
    <ul className='nav-list'>
      <li className='nav-item'>
        <a className='nav-link' href='#hero'>Home</a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#about'>About</a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#cases'>Cases</a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#blog'>Blog</a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#feedback'>Contact</a>
      </li>
    </ul>
  );
}

export default Nav;
