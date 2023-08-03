import { ThreeDots } from 'react-loader-spinner';
import './Loader.css';

export const Loader = () => {
  return (
    <div className='Wrap'>
      <ThreeDots
        height={80}
        width={80}
        radius={9}
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;