import { Card } from '@material-ui/core';
import React from 'react';
import Task from '../Task/Task.js';
import './Category.css';

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
                        <Task taskInfo={task} />
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default Category;