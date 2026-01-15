import { useCallback, useRef } from 'react';

import flip from '#/sfx/flip.opus';
import loss from '#/sfx/loss.opus';
import shuffle from '#/sfx/shuffle.opus';
import win from '#/sfx/win.opus';

type SoundType = 'reveal' | 'reset' | 'won' | 'lost';

const SFX_MAP: Record<SoundType, string> = {
  reveal: flip,
  reset: shuffle,
  won: win,
  lost: loss
};

const useSound = (
  isMuted: boolean
): { playSound: (type: SoundType) => void } => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const buffersRef = useRef<Map<SoundType, AudioBuffer>>(new Map());

  const playSound = useCallback(
    (type: SoundType) => {
      if (isMuted) return;

      audioContextRef.current ??= new window.AudioContext();
      const ctx = audioContextRef.current;

      if (ctx.state === 'suspended') void ctx.resume();

      const playBuffer = (buffer: AudioBuffer): void => {
        const source = ctx.createBufferSource();

        source.buffer = buffer;
        source.connect(ctx.destination);
        source.start();
      };

      const cachedBuffer = buffersRef.current.get(type);

      if (cachedBuffer) {
        playBuffer(cachedBuffer);
      } else {
        void fetch(SFX_MAP[type])
          .then(res => res.arrayBuffer())
          .then(data => ctx.decodeAudioData(data))
          .then(buffer => {
            buffersRef.current.set(type, buffer);
            playBuffer(buffer);

            return buffer;
          })
          .catch((error: unknown) => {
            console.error(`Failed to load sound: ${type}`, error);
          });
      }
    },
    [isMuted]
  );

  return { playSound };
};

export default useSound;
