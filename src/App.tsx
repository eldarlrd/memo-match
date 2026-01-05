import { type ReactElement } from 'react';

import '@/styles/global.css.ts';
import { Footer } from '@/banners/Footer.tsx';
import { Header } from '@/banners/Header.tsx';
import { Board } from '@/components/Board.tsx';
import { Controls } from '@/components/Controls.tsx';
import { useGame } from '@/hooks/useGame.ts';
import { GameOver } from '@/modals/GameOver.tsx';
import { container } from '@/styles/app.css.ts';

const App = (): ReactElement => {
  const {
    gridSize,
    cards,
    triesLeft,
    isMuted,
    isLoading,
    gameState,
    handleCardClick,
    handleSizeChange,
    initializeGame,
    toggleMute
  } = useGame();

  return (
    <div className={container}>
      <Header triesLeft={triesLeft} gridSize={gridSize} />

      <Controls
        currentGridSize={gridSize}
        gameState={gameState}
        onSizeChange={handleSizeChange}
      />

      <Board
        cards={cards}
        gridSize={gridSize}
        isLoading={isLoading}
        onCardClick={handleCardClick}
      />

      <Footer
        isMuted={isMuted}
        onReset={() => {
          initializeGame(gridSize);
        }}
        onToggleMute={toggleMute}
      />

      <GameOver
        gameState={gameState}
        triesLeft={triesLeft}
        onRestart={() => {
          initializeGame(gridSize);
        }}
      />
    </div>
  );
};

export default App;
