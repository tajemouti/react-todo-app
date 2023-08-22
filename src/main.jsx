import React from 'react';
import '@/styles/app.css';
import ReactDOM from 'react-dom/client';
import TodoApp from '@/components/TodoApp';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);

root.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
);
