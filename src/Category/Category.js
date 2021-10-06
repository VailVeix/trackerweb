import { Button, Card, CardContent} from '@material-ui/core';
import React from 'react';
import Task from '../Task/Task.js';
import './Category.css';


class Category extends React.Component{
	constructor(props){
		super(props);
		//this.state = {on: true};
	}

	render(){
		return(
            <div>
                <h2 className="Category-Name">Category Name</h2>
                <Card className="Category-Card" variant='outlined'>
                    <div className='Task-new-container'>
                        <form>
                            <textarea className='Task-new' rows='1' name="Task-new" placeholder='Category Name'/>
                        </form>
                    </div>
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </Card>
            </div>
		);
	}
}

export default Category;