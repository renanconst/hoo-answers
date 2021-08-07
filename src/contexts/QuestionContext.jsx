import React, { createContext, useEffect, useState } from 'react';
import P from 'prop-types';

export const QuestionContext = createContext({});

export const QuestionProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});
  const [question, setQuestion] = useState({
    body: '',
    title: '',
    author: {
      avatar: '',
      name: '',
    },
  });

  useEffect(() => {
    if (question.answers !== undefined) {
      setAnswers(question.answers);
    } else {
      setAnswers({});
    }
  }, [question]);

  return (
    <QuestionContext.Provider value={{ answers, question, setQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
};

QuestionProvider.propTypes = {
  children: P.node.isRequired,
};
