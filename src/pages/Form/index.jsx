import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

export const Form = () => {
  const location = useLocation();
  const isAsk = location.pathname === '/questions/ask';

  return (
    <>
      <Header />
      <form className="w-screen flex flex-col items-center gap-4 justify-center p-9">
        <div className="md:w-4/5 lg:w-3/5 rounded-xl bg-tertiary border-2 shadow-md border-grey">
          <header className="py-4 flex flex-col md:flex-row justify-between gap-2 items-end mx-4 md:mx-8 border-b-2 border-grey">
            <h1 className="md:text-xl font-title w-full">
              {isAsk ? 'Faça sua pergunta' : 'Responder '}
            </h1>
          </header>
          <div />
          <div className="flex flex-col p-2 md:p-8 gap-4">
            {isAsk && (
              <label
                className="font-title font-semibold text-secondary"
                htmlFor="title"
              >
                Título
                <input
                  required
                  className="block pl-4 inde w-full bg-grey h-8 rounded-lg"
                  type="text"
                  id="title"
                  placeholder="Pergunta"
                />
              </label>
            )}
            <label
              className="font-title font-semibold text-secondary"
              htmlFor="body"
            >
              {isAsk ? 'Corpo' : 'Responder Pergunta'}
              <textarea
                required
                placeholder={isAsk ? 'Corpo da pergunta' : 'Sua resposta'}
                className="resize-none block p-4 h-48 inde w-full bg-grey rounded-lg"
                name="body"
                id="body"
              />
            </label>
          </div>
          <footer className="h-14 px-8 flex justify-end items-center">
            <Button
              type="submit"
              func={() => 0}
              hasBackground
              title={isAsk ? 'Perguntar' : 'Responder'}
            />
          </footer>
        </div>
      </form>
    </>
  );
};
