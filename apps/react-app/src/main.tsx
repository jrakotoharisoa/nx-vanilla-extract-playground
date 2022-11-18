import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import './main.css';
import App from './app/app';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
