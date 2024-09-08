import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app.js';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import 'antd/lib/menu/style/css';
import 'antd/lib/layout/style/css';
import 'antd/lib/button/style/css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
