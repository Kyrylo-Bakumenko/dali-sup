import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import App from './components/app';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = createRoot(document.getElementById('main'));
root.render(<App />);
