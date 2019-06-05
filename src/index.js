import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { StoreProvider } from './store/useStore';

ReactDOM.render(
  (
    <StoreProvider>
      <App />
    </StoreProvider>
  ),
  document.getElementById('root'),
);

serviceWorker.unregister();
