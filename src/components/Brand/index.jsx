import P from 'prop-types';
import React from 'react';

export const Brand = ({ isLarge = false }) => (
  <>
    <div
      className={`flex flex-col font-head text-center h-16 w-16 ${
        isLarge && 'h-36 w-36'
      }`}
    >
      <h1
        className={`text-primary font-bold text-4xl ${isLarge && 'text-8xl'}`}
      >
        hoo
      </h1>
      <h2
        className={`text-secondary font-semibold text-sm; ${
          isLarge && 'text-4xl'
        }`}
      >
        Respostas
      </h2>
    </div>
  </>
);

Brand.propTypes = {
  isLarge: P.bool.isRequired,
};
