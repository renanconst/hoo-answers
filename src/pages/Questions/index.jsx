import React from 'react';
import { AnswerCard } from '../../components/AnswerCard';
import { Header } from '../../components/Header';
import { QuestionCard } from '../../components/QuestionCard';
import { useQuestion } from '../../hooks/useQuestion';

export const Questions = () => {
  const { answers } = useQuestion();

  return (
    <>
      <Header />
      <div className="w-screen flex flex-col items-center gap-4 justify-center p-9">
        <QuestionCard />
        <div>
          <h3 className="font-title font-semibold text-secondary">
            {`${Object.entries(answers).length} Respostas`}
          </h3>
        </div>
        <AnswerCard />
      </div>
    </>
  );
};
