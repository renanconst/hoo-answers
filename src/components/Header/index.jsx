import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Brand } from '../Brand';
import { Button } from '../Button';
import { UserCard } from '../UserCard';
import './styles.css';

export const Header = () => {
  const { signInWithGoogle, user } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const redirectToAsk = () => {
    if (!user) {
      return signInWithGoogle();
    }

    return history.push('/questions/ask');
  };

  return (
    <header className="header">
      <Link to="/">
        <Brand isLarge={false} />
      </Link>
      <div className="flex gap-2">
        {location.pathname !== '/questions/ask' && (
          <Button
            title="Perguntar"
            hasBackground={false}
            func={redirectToAsk}
            type="button"
          />
        )}

        {user && (
          <UserCard
            imgLink={user.avatar}
            isVisibleName={location.pathname === '/questions/ask'}
            name={user.name}
          />
        )}
      </div>
    </header>
  );
};
