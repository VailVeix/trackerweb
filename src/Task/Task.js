import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import './Task.css';

const useStyles = makeStyles(() => ({
    Button: {
        minWidth: 0,
        marginTop: 8,
        height: 28,
        width: 28
    }
}));

function Task(props) {
    const [cardState, setCardState] = useState(!props.off);
    const [cardColor] = useState(props.color);

    const buttonPush = () => {
        if (cardState) {
            setCardState(false);
        }
        else {
            setCardState(true);
        }
    }

    const classes = useStyles();

    return (
        <div className={`Task-container ${cardState ? "" : "Task-container-off"}`} >
            <div className={`Task-button-container ${cardState ? cardColor : "Task-button-container-off"}`}>
                <Button className={`Task-button ${cardState ? "" : "Task-button-off"} ${classes.Button}`} onClick={buttonPush}></Button>
            </div>
            <div className='Task-info-container'>
                <div className='Task-name'>{props.name}</div>
                <p className='Task-description'>{props.description}</p>
            </div>
        </div >
    );
};

export default Task;