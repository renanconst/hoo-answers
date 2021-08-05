import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Brand } from '../Brand';
import { Button } from '../Button';
import { UserCard } from '../UserCard';
import './styles.css';

export const Header = () => {
  const { signInWithGoogle, user } = useAuth();
  const history = useHistory();
  const windowWidth = window.innerWidth;

  return (
    <header className="header">
      <Link to="/">
        <Brand isLarge={false} />
      </Link>

      <div className="flex gap-2">
        <Button
          title="Perguntar"
          hasBackground={false}
          func={() => history.push('/questions/ask')}
          type="button"
        />

        {user ? (
          <UserCard
            imgLink={user.avatar}
            isVisibleName={false}
            name={user.name}
          />
        ) : (
          windowWidth > 640 && (
            <Button
              title="Conectar"
              hasBackground
              func={signInWithGoogle}
              type="button"
            />
          )
        )}
      </div>
    </header>
  );
};
