import React from 'react';
import './App.css';
import Category from './Category/Category.js';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                Task Tracker
            </header>
            <div className='App-body'>
                <Category />
                <Category />
                <Category />
                <Category />
            </div>
        </div>
    );
}

export default App;
