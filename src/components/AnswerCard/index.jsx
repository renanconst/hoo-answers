import React from 'react';
import { useQuestion } from '../../hooks/useQuestion';
import { UserCard } from '../UserCard';

export const AnswerCard = () => {
  const { answers } = useQuestion();

  const answersArray = Object.entries(answers);

  const Questions = answersArray.map((answer, index) => (
    <div key={answer[0]} className="p-8 flex flex-col gap-8 w-full">
      <p>{answer[1].answer}</p>

      <UserCard
        imgLink={answer[1].author.avatar}
        isVisibleName
        name={answer[1].author.name}
      />

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
