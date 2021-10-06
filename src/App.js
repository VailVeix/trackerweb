import React from 'react';
import './App.css';
import Category from './Category.js';


function App() {
  return (
    <div className="App">
        <header className="App-header">
           	Task Tracker
        </header>
        <body className='App-body'>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
        </body>
    </div>
    );
}

export default App;
