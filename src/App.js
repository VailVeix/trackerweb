import React from 'react';
import Category from './Category/Category.js';
import './App.css';

const tasks = [{
    "name": "My Tasks", "tasks": [
        { "name": "Vacuum", "description": "", "rating": 1, "off": false, "lastComplete": "2021-10-20", "streak": 1 },
        { "name": "Cat Litter", "description": "", "rating": 2, "off": false, "lastComplete": "", "streak": 2 },
        { "name": "Change Bed Sheets", "description": "", "rating": 3, "off": false, "lastComplete": "2021-10-20", "streak": 5 },
        { "name": "Microwave", "description": "", "rating": 4, "off": false, "lastComplete": "2021-10-20", "streak": 3 },
        { "name": "Empty Old Food From Fridge", "description": "compost applicable materials", "rating": 5, "off": false, "lastComplete": "2021-10-20", "streak": 0 },
        { "name": "Bong", "description": "", "rating": 6, "off": false, "lastComplete": "2021-10-20", "streak": 2 },
        { "name": "Toilet", "description": "", "rating": 7, "off": false, "lastComplete": "2021-10-20", "streak": 0 },
        { "name": "Tub", "description": "", "rating": 8, "off": false, "lastComplete": "2021-10-20", "streak": 4 },
        { "name": "Dust Desk", "description": "", "rating": 4, "off": true, "lastComplete": "2021-10-20", "streak": 1 }
    ]
}];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                Task Tracker
            </header>
            <div className='App-body'>
                {tasks.map((category) => (
                    <Category name={category.name} tasks={category.tasks} />
                ))}
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