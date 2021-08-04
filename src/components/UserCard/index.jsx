import React from 'react';
import P from 'prop-types';

export const UserCard = ({ isVisibleName, imgLink, name }) => (
  <div className="flex items-center gap-2">
    <img
      src={imgLink}
      alt={name}
      className="w-9 overflow-hidden h-9 bg-primary rounded-full"
    />
    {isVisibleName && <strong className="font-title text-base">{name}</strong>}
  </div>
);

UserCard.propTypes = {
  isVisibleName: P.bool.isRequired,
  imgLink: P.string.isRequired,
  name: P.string.isRequired,
};
