import React from 'react';
import './App.css';
import Category from './Category/Category.js';


function App() {
    const tasks = [
        { "name": "Task Name 1", "description": "this is a description", "rating": 1, "off": false },
        { "name": "Task Name 2", "description": "this is a description", "rating": 2, "off": false },
        { "name": "Task Name 3", "description": "this is a description", "rating": 3, "off": false },
        { "name": "Task Name 4", "description": "this is a description", "rating": 4, "off": false },
        { "name": "Task Name 5", "description": "this is a description", "rating": 5, "off": false },
        { "name": "Task Name 6", "description": "this is a description", "rating": 6, "off": false },
        { "name": "Task Name 7", "description": "this is a description", "rating": 7, "off": false },
        { "name": "Task Name 8", "description": "this is a description", "rating": 8, "off": false },
        { "name": "Task Name 9", "description": "this is a description", "rating": 4, "off": true },];

    return (
        <div className="App">
            <header className="App-header">
                Task Tracker
            </header>
            <div className='App-body'>
                <Category name="Category Name" tasks={tasks} />
            </div>
        </div>
    );
}

export default App;
