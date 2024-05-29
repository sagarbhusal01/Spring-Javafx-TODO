import React from 'react';
import ReactDOM from 'react-dom/client';
import Todo from './Pages/Todo/Todo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Todo/>
  </React.StrictMode>
);
