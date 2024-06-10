import React, { useState, useEffect, useCallback } from 'react';
import Category from './Category/Category.js';
import './App.css';

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [info, setInfo] = useState([]);


    useEffect(() => {
        fetch("http://vailveix.com/fetchTracker.php", {crossDomain: true})
          .then(res => res.json())
          .then(
            (response) => {
                setIsLoaded(true);
                setInfo(response);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
          )
      }, [])

    return (
        <div className="App">
            <header className="App-header">
                Task Tracker
            </header>
            <div className='App-content-wrapper'>
                <div className='App-sidebar'>
                </div>
                <div className='App-break'></div>
                <div className='App-body'>
                    {info.map((category) => (
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
Finish task and category data structures
Have server return data correctly
Correctly bring in data from server.
update complete button to send to server
update complete server script to use posted vars

streak functionality
create functions for updating last complete, total completions


right click- open edit window
task text submit/make new task
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