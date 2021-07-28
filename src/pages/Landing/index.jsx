import React from 'react';
import { Link } from 'react-router-dom';
import illustrationImg from '../../assets/images/illustration.svg';
import { Brand } from '../../components/Brand';
import { QuestionCard } from '../../components/QuestionCard';

export const Landing = () => (
  <div className="md:flex">
    <section className="h-screen md:w-3/5 bg-primary flex flex-col items-center justify-center gap-20 font-title">
      <img
        className="h-56 md:h-72 lg:h-96"
        src={illustrationImg}
        alt="ilustração"
      />
      <span className="text-center">
        <h3 className="font-bold text-secondary text-lg md:text-2xl">
          Tire suas maiores dúvidas aqui
        </h3>
        <Link to="/">
          <h1 className="text-tertiary  text-3xl md:text-4xl font-bold">
            Faça sua pergunta
          </h1>
        </Link>
      </span>
    </section>
    <section className="h-screen md:w-2/5 md:overflow-y-auto bg-tertiary flex flex-col items-center text-secondary p-8">
      <Brand isLarge />
      <hr className="border-2 w-60 my-4 border-grey" />
      <h2 className="font-title text-xl lg:text-2xl"> Perguntas Recentes </h2>
      <div className="my-4 flex flex-col gap-3 pb-4">
        <QuestionCard link="#">Como formatar data em javascript?</QuestionCard>
        <QuestionCard link="#">Oque é programação?</QuestionCard>
        <QuestionCard link="#">
          Para que serve a linguagem de programação Javascript?
        </QuestionCard>
      </div>
    </section>
  </div>
);
