import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ children, onClick }) => {
  return (
    <button type="button" className='Btn' onClick={onClick} aria-label="Load more">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

export default Button;