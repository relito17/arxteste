import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/base.css';
import './styles/animations.css';
import './styles/components/navbar.css';
import './styles/components/services.css';
import './styles/components/process.css';
import './styles/components/contact.css';

// Corrigir redirecionamento ao carregar diretamente uma rota
const redirectPath = sessionStorage.redirect;
if (redirectPath) {
  sessionStorage.removeItem('redirect');
  window.history.replaceState(null, '', redirectPath);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
