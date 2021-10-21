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
            <h2 className="Category-Name">Category Name</h2>
            <Card className="Category-Card" variant='outlined'>
                <div className='Task-new-container'>
                    <form>
                        <textarea className='Task-new' rows='1' name="Task-new" placeholder='Category Name' />
                    </form>
                </div>
                <div>
                    <Task name="Task Name 1" description="Task Description" color={taskRatingToColor(1)} off={false} />
                    <Task name="Task Name 2" description="Tsk Description" color={taskRatingToColor(2)} off={false} />
                    <Task name="Task Name 3" description="Tak Description" color={taskRatingToColor(3)} off={false} />
                    <Task name="Task Name 4" description="Tas Description" color={taskRatingToColor(4)} off={false} />
                    <Task name="Task Name 5" description="TaskDescription" color={taskRatingToColor(5)} off={false} />
                    <Task name="Task Name 6" description="Task escription" color={taskRatingToColor(6)} off={false} />
                    <Task name="Task Name 7" description="Task Dscription" color={taskRatingToColor(7)} off={false} />
                    <Task name="Task Name 8" description="Task Decription" color={taskRatingToColor(8)} off={false} />
                    <Task name="Task Name Off" description="Task Decription" color={taskRatingToColor(3)} off={true} />
                </div>
            </Card>
        </div>
    );
};

export default Category;