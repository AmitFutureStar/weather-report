//IconButton
import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  customClass: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  text: "",
  type: "button",
  size: "md",
  icon: "fa-info",
  isDisabled: false,
  title: "",
  customClass: "",
  onClick: () => { },
};

// how to use
// Ex1: <Button text="Add To Cart" />
// Ex2: <Button type="button" text="Add To Cart" onClick={this.addToCart} />

const IconButton = ({
  text,
  type,
  size,
  icon,
  title,
  isDisabled,
  customClass,
  onClick
}) => (
    <button
      type={type}
      onClick={onClick}
      title={title}
      disabled={isDisabled}
      className={`btn ${'btn-' + size} ${isDisabled ? 'disabled' : ''} ${customClass}`}
    >
      <i className={`fa ${icon}`} aria-hidden="true"></i> {text}
    </button>
  );


IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;
