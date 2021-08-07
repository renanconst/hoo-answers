import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../contexts/AuthContext';
import { QuestionProvider } from '../../contexts/QuestionContext';
import { Routes } from '../../routes';

const App = () => (
  <AuthProvider>
    <QuestionProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </QuestionProvider>
  </AuthProvider>
);

export default App;
