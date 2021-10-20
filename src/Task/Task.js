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

function Task() {
    const [cardState, setCardState] = useState(true);

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
        <div className={`Task-container ${cardState ? "CardOn" : "CardOff"}`} >
            <div className={`Task-button-container ${cardState ? "" : "CardOff"}`}>
                <Button className={`Task-button ${cardState ? "CardOn" : "CardOff"} ${classes.Button}`} onClick={buttonPush}></Button>
            </div>
            <div className='Task-info-container'>
                <div className='Task-name'>Task Item</div>
                <p className='Task-description'>This is the task description</p>
            </div>
        </div >
    );
};

export default Task;