import React, { createContext, useState, useEffect } from 'react';
import P from 'prop-types';
import { auth, firebase } from '../services/firebase';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userData => {
      if (userData) {
        const { displayName, photoURL, uid } = userData;

        if (!displayName || !photoURL) {
          throw new Error('Missing information.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const res = await auth.signInWithPopup(provider);

    if (res.user) {
      const { displayName, photoURL, uid } = res.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing information.');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  };

  return (
    <AuthContext.Provider value={{ signInWithGoogle, user }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: P.node.isRequired,
};
