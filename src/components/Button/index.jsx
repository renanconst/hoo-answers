import React from 'react';
import P from 'prop-types';
import './styles.css';

// eslint-disable-next-line
export const Button = ({ func, hasBackground, type, title }) => (
  <button
    type={type === 'submit' ? 'submit' : 'button'}
    onClick={func}
    className={`btn ${hasBackground && 'btn btn-has-background'}`}
  >
    {title}
  </button>
);

Button.propTypes = {
  func: P.func.isRequired,
  hasBackground: P.bool.isRequired,
  type: P.oneOf(['button', 'submit']).isRequired,
  title: P.string.isRequired,
};
