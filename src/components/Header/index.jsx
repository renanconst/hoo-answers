import React from 'react';
import { Brand } from '../Brand';
import { Button } from '../Button';
import './styles.css';

export const Header = () => {
  const windowWidth = window.innerWidth;

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
        {windowWidth > 640 && (
          <Button title="Conectar" hasBackground func={() => 0} type="button" />
        )}
      </div>
    </header>
  );
};
