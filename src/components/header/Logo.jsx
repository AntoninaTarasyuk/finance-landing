import './Logo.scss';
import iconLogo from '../../assets/iconLogo.svg';

function Logo() {
  return (
    <a href='./index.html' className='logo'>
      <img src={iconLogo} alt='' className='logo-img' />
      Finance
      <span className='logo-decor'>Ledger</span>
    </a>
  );
}

export default Logo;
