import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import illustrationImg from '../../assets/images/illustration.svg';
import { Brand } from '../../components/Brand';
import { QuestionLink } from '../../components/QuestionLink';
import './styles.css';
import { database } from '../../services/firebase';

export const Landing = () => {
  const [questions, setQuestions] = useState({});
  const [limit, setLimit] = useState(10);

  const handleLimit = () => {
    setLimit(e => e + 10);
  };

  useEffect(() => {
    const data = database.ref('questions').limitToLast(limit);

    data.on('value', snapshot => {
      setQuestions(snapshot.val());
    });
  }, [limit]);

  const questionsArray = Object.entries(questions)
    .reverse()
    .map(question => (
      <QuestionLink key={question[0]} link={`/questions?id=${question[0]}`}>
        {question[1].title}
      </QuestionLink>
    ));

  return (
    <div className="md:flex">
      <section className="first-section md:w-3/5">
        <img
          className="h-56 md:h-72 lg:h-96"
          src={illustrationImg}
          alt="ilustração"
        />
        <span className="text-center">
          <h3 className="font-bold text-secondary text-lg md:text-2xl">
            Tire suas maiores dúvidas aqui
          </h3>
          <Link to="/questions/ask">
            <h1 className="text-tertiary  text-3xl md:text-4xl font-bold">
              Faça sua pergunta
            </h1>
          </Link>
        </span>
      </section>
      <section className="h-screen md:overflow-y-auto bg-tertiary flex flex-col items-center text-secondary p-8 md:w-2/5">
        <Brand isLarge />
        <hr className="border-2 w-60 my-4 border-grey" />
        <h2 className="font-title text-xl lg:text-2xl"> Perguntas Recentes </h2>
        <div className="my-4 flex flex-col gap-3 pb-4">{questionsArray}</div>
        <button
          type="button"
          onClick={handleLimit}
          className="text-secondary font-semibold font-title hover:text-primary"
        >
          Ver mais perguntas
        </button>
      </section>
    </div>
  );
};
