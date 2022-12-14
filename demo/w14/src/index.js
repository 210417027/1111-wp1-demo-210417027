import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App_27 from './App_27';
import { BlogContextProvider_27 } from './BlogContext_27';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogContextProvider_27>
      <App_27 />
    </BlogContextProvider_27>
  </React.StrictMode>
);
