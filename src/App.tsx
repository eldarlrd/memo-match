import type { ReactElement } from 'react';

import '@/styles/global.css.ts';
import Footer from '@/banners/Footer.tsx';
import Header from '@/banners/Header.tsx';
import Board from '@/components/Board.tsx';
import useGame from '@/hooks/useGame.ts';
import GameOver from '@/modals/GameOver.tsx';
import { container } from '@/styles/app.css.ts';
import '@fontsource-variable/dynapuff/index.css';
import 'modern-normalize/modern-normalize.css';

const App = (): ReactElement => {
  const {
    gameState,
    triesLeft,
    gridSize,
    cards,
    isLoading,
    isMuted,
    handleSizeChange,
    handleCardClick,
    initializeGame,
    toggleMute
  } = useGame();

  return (
    <div className={container}>
      <Header
        gameState={gameState}
        triesLeft={triesLeft}
        currentGridSize={gridSize}
        onSizeChange={handleSizeChange}
      />

      <Board
        cards={cards}
        gridSize={gridSize}
        isLoading={isLoading}
        onCardClick={handleCardClick}
      />

      <GameOver
        gameState={gameState}
        onRestart={() => {
          initializeGame(gridSize);
        }}
      />

      <Footer
        isMuted={isMuted}
        onToggleMute={toggleMute}
        onReset={() => {
          initializeGame(gridSize);
        }}
      />
    </div>
  );
};

export default App;
