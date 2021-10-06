import { Button, Card, CardContent} from '@material-ui/core';
import React from 'react';
import './Task.css';

class Task extends React.Component{
	constructor(props){
		super(props);
		this.state = {on: true};
	}

	buttonPush(){
		return ()=>this.setState({on: !this.state.on})
	}

	render(){
		return(
			<Card classes={{root: this.state.on?"CardOn":"CardOff"}} className='Task-item'>
				<CardContent>
					<Button classes={{root: this.state.on?"CardOn":"CardOff"}} variant="contained" onClick={this.buttonPush()}>Button</Button>
                    <div className='Task-name'>Task Item</div>
				</CardContent>
			</Card>
		);
	}
}

export default Task;