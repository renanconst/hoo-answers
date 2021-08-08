import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';
import { useQuestion } from '../../hooks/useQuestion';
import { Button } from '../Button';
import { UserCard } from '../UserCard';

export const QuestionCard = () => {
  const { question } = useQuestion();
  const id = useQuery().get('id');

  const history = useHistory();

  const handleRedirect = () => {
    history.push(`questions/reply?id=${id}`);
  };

  return (
    <div className="md:w-4/5 lg:w-3/5 rounded-xl bg-tertiary border-2 shadow-md border-grey">
      <header className="py-4 flex flex-col md:flex-row justify-between gap-2 items-end mx-4 md:mx-8 border-b-2 border-grey">
        <h1 className="md:text-xl font-title w-full">{question.title}</h1>
        <Button
          title="Responder"
          hasBackground
          type="button"
          func={handleRedirect}
        />
      </header>
      <div className="p-4 md:p-8">
        <p className="text-base md:text-xl font-roboto ">{question.body}</p>
      </div>
      <footer className="h-14 px-8 flex justify-between items-center">
        <UserCard
          imgLink={question.author.avatar}
          isVisibleName
          name={question.author.name}
        />
      </footer>
    </div>
  );
};
