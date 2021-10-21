import { Card } from '@material-ui/core';
import React from 'react';
import Task from '../Task/Task.js';
import './Category.css';

const taskRatingToColor = (rating) => {
    switch (rating) {
        case 0:
            return "Task-button-container-off";
        case 1:
            return "Task-button-container-redder";
        case 2:
            return "Task-button-container-red";
        case 3:
            return "Task-button-container-orange";
        case 4:
            return "Task-button-container-yellow";
        case 5:
            return "Task-button-container-green";
        case 6:
            return "Task-button-container-blue";
        case 7:
            return "Task-button-container-bluer";
        case 8:
            return "Task-button-container-purple";
    }
}

function Category(props) {
    return (
        <div className='Category-container'>
            <h2 className="Category-Name">{props.name}</h2>
            <Card className="Category-Card" variant='outlined'>
                <div className='Task-new-container'>
                    <form>
                        <textarea className='Task-new' rows='1' name="Task-new" placeholder={props.name} />
                    </form>
                </div>
                <div>
                    {props.tasks.map((task) => (
                        <Task name={task.name} description={task.description} color={taskRatingToColor(task.rating)} off={task.off} />
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default Category;