import React from 'react';
import Category from './Category/Category.js';
import './App.css';

const tasks = [{
    "name": "Opening Shift", "tasks": [
        { "name": "Drink Water", "description": "Take meds", "rating": 3, "off": false, "lastComplete": "", "streak": 0 },
    ]
},
{
    "name": "Closing Duties", "tasks": [
        { "name": "Phone, Meds, Alarm", "description": "", "rating": 3, "off": false, "lastComplete": "", "streak": 0 },
        { "name": "Clean Off Desk", "description": "", "rating": 3, "off": false, "lastComplete": "", "streak": 0 },
        { "name": "Pick Up Trash", "description": "", "rating": 3, "off": false, "lastComplete": "", "streak": 0 },
        { "name": "Refill Waters", "description": "", "rating": 3, "off": false, "lastComplete": "", "streak": 0 },
    ]
}];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                Task Tracker
            </header>
            <div className='App-content-wrapper'>
                <div className='App-sidebar'></div>
                <div className='App-break'></div>
                <div className='App-body'>
                {tasks.map((category) => (
                    <Category name={category.name} tasks={category.tasks} />
                ))}
                </div>
            </div>
        </div>
    );
}

export default App;

/*
TODO LIST:
right click- open edit window
task text submit/make new task
left click complete whole box
#times complete counter
move completed tasks to bottom, order by complete/not complete, then next due date
add checkmark svg
edit box creation- add frequency, etc
default frequency setting
custom colors
add tags
sort by tags
edit styles to zoom in
low/med/high tags
change how add task

*/