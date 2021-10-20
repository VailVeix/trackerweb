import { Card } from '@material-ui/core';
import React from 'react';
import Task from '../Task/Task.js';
import './Category.css';


function Category() {
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
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </div>
            </Card>
        </div>
    );
};

export default Category;