import { type ReactElement } from 'react';

import '@/styles/global.css.ts';
import { Board } from '@/components/Board.tsx';
import { Controls } from '@/components/Controls.tsx';
import { Footer } from '@/components/Footer.tsx';
import { GameOverModal } from '@/components/GameOverModal.tsx';
import { Header } from '@/components/Header.tsx';
import { useGame } from '@/hooks/useGame.ts';
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

      <GameOverModal
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
