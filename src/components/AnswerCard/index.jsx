import React from 'react';
import P from 'prop-types';
import { UserCard } from '../UserCard';

export const AnswerCard = ({ answers }) => {
  const Questions = answers.map((answer, index) => (
    <div key={answer.id} className="p-8 flex flex-col gap-8 w-full">
      <p>{answer.answers}</p>
      <UserCard imgLink="" isVisibleName name={answer.user} />
      {index !== answers.length - 1 && (
        <hr className="border-2 border-grey w-11/12" />
      )}
    </div>
  ));

  return (
    <div className="md:w-4/5 lg:w-3/5 rounded-xl flex flex-col items-center bg-tertiary border-2 shadow-md border-grey">
      {Questions}
    </div>
  );
};

AnswerCard.propTypes = {
  answers: P.arrayOf(P.object).isRequired,
};
