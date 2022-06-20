import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, rootInstance } from './store';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider value={rootInstance}>
      <App />
    </Provider>
  </StrictMode>
);
