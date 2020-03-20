import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Susannolini</h1>
    </div>
  );
}

function getPuppy () {
  fetch('http://www.recipepuppy.com/api/')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
}
getPuppy();
export default App;
