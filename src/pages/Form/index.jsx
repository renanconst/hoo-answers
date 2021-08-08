import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { useAuth } from '../../hooks/useAuth';
import { useQuery } from '../../hooks/useQuery';
import { database } from '../../services/firebase';

export const Form = () => {
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');

  const { signInWithGoogle, user } = useAuth();
  const history = useHistory();
  const id = useQuery().get('id');

  const handleSubmit = async e => {
    e.preventDefault();

    if (!user) {
      signInWithGoogle();
      return;
    }

    if (body.trim() === '') {
      return;
    }

    if (id) {
      await database.ref(`/questions/${id}/answers`).push({
        answer: body,
        author: {
          name: user.name,
          avatar: user.avatar,
        },
      });

      history.push(`/questions?id=${id}`);
      return;
    }

    if (title.trim() === '') return;

    const question = await database.ref('/questions').push({
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      body,
      title,
    });

    history.push(`/questions?id=${question.key}`);
  };

  return (
    <>
      <Header />
      <form
        onSubmit={handleSubmit}
        className="w-screen flex flex-col items-center gap-4 justify-center p-9"
      >
        <div className="md:w-4/5 lg:w-3/5 rounded-xl bg-tertiary border-2 shadow-md border-grey">
          <header className="py-4 flex flex-col md:flex-row justify-between gap-2 items-end mx-4 md:mx-8 border-b-2 border-grey">
            <h1 className="md:text-xl font-title w-full">
              {!id ? 'Faça sua pergunta' : 'Responder '}
            </h1>
          </header>
          <div />
          <div className="flex flex-col p-2 md:p-8 gap-4">
            {!id && (
              <label
                className="font-title font-semibold text-secondary"
                htmlFor="title"
              >
                Título
                <input
                  required
                  value={title}
                  onChange={e => setTitle(e.target.value)}
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
              {!id ? 'Corpo' : 'Responder Pergunta'}
              <textarea
                required
                value={body}
                onChange={e => setBody(e.target.value)}
                placeholder={!id ? 'Corpo da pergunta' : 'Sua resposta'}
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
              title={!id ? 'Perguntar' : 'Responder'}
            />
          </footer>
        </div>
      </form>
    </>
  );
};
