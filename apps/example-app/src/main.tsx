import { myLib } from '@nx-graph-bug/my-lib';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

console.log(myLib());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
