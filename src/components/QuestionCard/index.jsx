import React from 'react';
import P from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

export const QuestionCard = ({ children, link }) => (
  <Link className="question-card" to={link}>
    <p className="font-title text-base lg:text-xl h-2/3 text-secondary">
      {children}
    </p>
    <div className="h1/3 flex justify-end" />
  </Link>
);

QuestionCard.propTypes = {
  children: P.string.isRequired,
  link: P.string.isRequired,
};
