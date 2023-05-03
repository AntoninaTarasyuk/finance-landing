import { Circles } from 'react-loader-spinner';
import './Spinner.scss';

function Spinner() {
  return (
    <Circles
      height='60'
      width='60'
      color='#ffffff'
      ariaLabel='circles-loading'
      wrapperStyle={{}}
      wrapperClass='circles-loading-wrapper'
      visible
    />
  );
}
export default Spinner;
