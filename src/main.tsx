/**
 * @license AGPL-3.0-only
 * Memo Match - A Concentration game
 * Copyright (C) 2026 Eldar Pashazade <eldarlrd@pm.me>
 *
 * This file is part of Memo Match.
 *
 * Memo Match is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * Memo Match is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Memo Match. If not, see <https://www.gnu.org/licenses/>.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/App.tsx';
import { ERROR_SW } from '@/config/errors.ts';

const root = document.getElementById('root');

if (root)
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );

const registerSW = (): void => {
  if ('serviceWorker' in navigator)
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/memo-match/sw.js', {
          scope: '/memo-match/'
        })
        .catch((error: unknown) => {
          if (error instanceof Error) console.error(ERROR_SW, error);
        });
    });
};

registerSW();
