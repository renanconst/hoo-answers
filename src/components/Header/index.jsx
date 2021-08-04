import React from 'react';
import { Brand } from '../Brand';
import { Button } from '../Button';
import { UserCard } from '../UserCard';
import './styles.css';

export const Header = () => {
  const windowWidth = window.innerWidth;

  const isLogin = true;

  return (
    <header className="header">
      <Brand isLarge={false} />
      <div className="flex gap-2">
        <Button
          title="Perguntar"
          hasBackground={false}
          func={() => 0}
          type="button"
        />

        {isLogin ? (
          <UserCard imgLink="" isVisibleName={false} name="test" />
        ) : (
          windowWidth > 640 && (
            <Button
              title="Conectar"
              hasBackground
              func={() => 0}
              type="button"
            />
          )
        )}
      </div>
    </header>
  );
};
