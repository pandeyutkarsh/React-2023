// 1) Import react and reactDOM libraries
import React from 'react';
import ReactDOM  from 'react-dom/client';
import App from './App'; 
// 2) get a reference to the div ID root
const el = document.getElementById('root');

// 3) Tell React to take controle of that element 
const root = ReactDOM.createRoot(el);

// 4) Create a component

// function  App() {
//     return <h1>Hi There!</h1>
// }

// 5) Show the component on the screen
root.render(<App />);