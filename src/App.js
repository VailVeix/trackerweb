import React from 'react';
import Category from './Category/Category.js';
import './App.css';

const info = {
    "user_name": "Alex",
    "last_update": "",
    "categories": [
        {
            "name": "Weekly Cleaning",
            "tasks": [
                {
                    "name": "Laundry",
                    "description": "",
                    "rating": 6,
                    "off": false,
                    "nextDue": "Tomorrow",
                    "lastComplete": "Tomorrow",
                    "streak": 0,
                    "completions": [
                        {},
                    ]
                },
            ]
        },
    ]
};

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [tasks, setTasks] = useState([]);

    const [isSending, setIsSending] = useState(false);

    const taskRequest = useCallback(async () => {
        if (isSending) return;
        setIsSending(true);
        await fetch("http://vailveix.com/fetchTasks.php", {crossDomain: true})
            .then(res => res.json())
            .then(
            (response) => {
                setIsLoaded(true);
                setTasks(response);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
        setIsSending(false);
    }, [isSending]);

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