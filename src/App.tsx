import { type ReactElement } from 'react';

import '@/styles/global.css.ts';
import { Board } from '@/components/Board';
import { Controls } from '@/components/Controls';
import { Footer } from '@/components/Footer';
import { GameOverModal } from '@/components/GameOverModal';
import { Header } from '@/components/Header';
import { useGame } from '@/hooks/useGame';
import * as styles from '@/styles/app.css.ts';

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
    <div className={styles.container}>
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
