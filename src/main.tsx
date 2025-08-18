import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.tsx';

import '../src/styles/theme.css';
import '../src/styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
