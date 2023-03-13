import React from 'react';
import ReactDOM from 'react-dom/client';

const rootEl = document.getElementById('root');

const root = ReactDOM.createRoot(rootEl);

function App() {
  const message = 'Enter age';
  return (
    <div>
      <h1>بسم الله</h1>
      <input
        type={'number'}
        style={{ backgroundColor: 'yellow' }}
        min="6"
        step={6}
        alt={message}
      ></input>
    </div>
  );
}

root.render(<App />);
