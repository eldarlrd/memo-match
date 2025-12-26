import { useCallback, useRef } from 'react';

export type SoundType = 'reveal' | 'reset' | 'won' | 'lost';

export const useSound = (
  isMuted: boolean
): { playSound: (type: SoundType) => void } => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const playSound = useCallback(
    (type: SoundType) => {
      if (isMuted) return;

      audioContextRef.current ??= new window.AudioContext();

      const ctx = audioContextRef.current;

      if (ctx.state === 'suspended') void ctx.resume();

      if (type === 'reveal') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } else if (type === 'reset') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === 'won') {
        [440, 554.37, 659.25, 880].forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const g = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1);
          g.gain.setValueAtTime(0.05, ctx.currentTime + i * 0.1);
          g.gain.exponentialRampToValueAtTime(
            0.01,
            ctx.currentTime + i * 0.1 + 0.2
          );
          osc.connect(g);
          g.connect(ctx.destination);
          osc.start(ctx.currentTime + i * 0.1);
          osc.stop(ctx.currentTime + i * 0.1 + 0.2);
        });
      } else {
        [392, 349.23, 329.63, 261.63].forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const g = ctx.createGain();

          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.15);
          g.gain.setValueAtTime(0.05, ctx.currentTime + i * 0.15);
          g.gain.exponentialRampToValueAtTime(
            0.01,
            ctx.currentTime + i * 0.15 + 0.3
          );
          osc.connect(g);
          g.connect(ctx.destination);
          osc.start(ctx.currentTime + i * 0.15);
          osc.stop(ctx.currentTime + i * 0.15 + 0.3);
        });
      }
    },
    [isMuted]
  );

  return { playSound };
};
