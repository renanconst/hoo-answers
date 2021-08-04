import React from 'react';
import P from 'prop-types';
import { Button } from '../Button';
import { UserCard } from '../UserCard';

export const QuestionCard = ({ title, body, user }) => (
  <div className="md:w-4/5 lg:w-3/5 rounded-xl bg-tertiary border-2 shadow-md border-grey">
    <header className="py-4 flex flex-col md:flex-row justify-between gap-2 items-end mx-4 md:mx-8 border-b-2 border-grey">
      <h1 className="md:text-xl font-title w-full">{title}</h1>
      <Button title="Responder" hasBackground type="button" func={() => 0} />
    </header>
    <div className="p-4 md:p-8">
      <p className="text-base md:text-xl font-roboto ">{body}</p>
    </div>
    <footer className="h-14 px-8 flex justify-between items-center">
      <UserCard imgLink={user} isVisibleName name={user} />
    </footer>
  </div>
);

QuestionCard.propTypes = {
  title: P.string.isRequired,
  body: P.string.isRequired,
  user: P.string.isRequired,
};
