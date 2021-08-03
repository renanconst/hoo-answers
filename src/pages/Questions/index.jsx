import React from 'react';
import { AnswerCard } from '../../components/AnswerCard';
import { Header } from '../../components/Header';
import { QuestionCard } from '../../components/QuestionCard';

const fakeAnwsers = [
  { answers: 'É bem simples basta, usar desse jeito', user: 'teste1', id: 1 },
  { answers: 'Use dessa forma que funciona legal', user: 'teste2', id: 2 },
  { answers: 'Correto', user: 'teste3', id: 3 },
  { answers: '??', user: 'teste4', id: 4 },
];

export const Questions = () => (
  <>
    <Header />
    <div className="w-screen flex flex-col items-center gap-4 justify-center p-9">
      <QuestionCard
        title="Como formatar data em javascript"
        body="Ex: 10/12/2020"
        user="test"
      />
      <div>
        <h3 className="font-title font-semibold text-secondary">
          {`${fakeAnwsers.length} Respostas`}
        </h3>
      </div>
      <AnswerCard answers={fakeAnwsers} />
    </div>
  </>
);
