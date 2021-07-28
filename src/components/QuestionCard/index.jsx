import React from 'react';
import P from 'prop-types';
import { Link } from 'react-router-dom';

export const QuestionCard = ({ children, link }) => (
  <Link
    className="
        w-72 lg:w-96 h-28 bg-tertiary shadow-md rounded-lg p-4
        font-semibold flex flex-col content-between border-2 border-grey
        hover:bg-grey duration-200
      "
    to={link}
  >
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
