import { useContext, useEffect } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';
import { database } from '../services/firebase';
import { useQuery } from './useQuery';

export const useQuestion = () => {
  const { setQuestion } = useContext(QuestionContext);

  const id = useQuery().get('id');

  useEffect(() => {
    const data = database.ref(`questions/${id}`);
    data.on('value', snapshot => {
      setQuestion(snapshot.val());
    });
  }, []);

  return useContext(QuestionContext);
};
