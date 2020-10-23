import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  customClass: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  text: "Button",
  type: "button",
  color: "warning",
  size: "md",
  isDisabled: false,
  isActive: false,
  customClass: '',
  onClick: () => { },
  isLoading: false
};

// how to use
// Ex1: <Button text="Add To Cart" />
// Ex2: <Button type="button" text="Add To Cart" onClick={this.addToCart} />

const Button = ({
  text,
  type,
  color,
  size,
  isActive,
  onClick,
  customClass,
  isDisabled,
  isLoading
}) => {
  const btnEvent = isLoading ? 'btn_event' : '';
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${'btn-' + size} ${isActive ? 'active' : ""} ${customClass} ${btnEvent}`}
      disabled={isDisabled}
    >
      {
        isLoading ?
          <span style={{ position: 'relative' }}><i className="btn_spinner"></i><span style={{ opacity: '0.2' }}>{text}</span></span>
          : text
      }
    </button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
