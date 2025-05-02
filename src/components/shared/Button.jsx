import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ children, version, type, isDisabled, to, isFloating }) {
  if (to) {
    // If a "to" prop is passed → render a <Link> styled as button
    return (
      <Link
        to={to}
        className={`btn btn-${version} ${isFloating ? 'btn-floating' : ''}`}
        aria-disabled={isDisabled}
      >
        {children}
      </Link>
    );
  }

  // Regular <button>
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`btn btn-${version} ${isFloating ? 'btn-floating' : ''}`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
  isFloating: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  to: PropTypes.string, // optional for floating links
  isFloating: PropTypes.bool, // flag for floating style
};

export default Button;
