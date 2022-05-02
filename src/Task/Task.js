import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import './Task.css';

const useStyles = makeStyles(() => ({
    Button: {
        minWidth: 0,
        marginTop: 0,
        height: 24,
        width: 24
    }
}));

const taskRatingToColor = (rating) => {
    var classStyle = "Task-button-container-";
    switch (rating) {
        case 0:
            return classStyle + "off";
        case 1:
            return classStyle + "redder";
        case 2:
            return classStyle + "red";
        case 3:
            return classStyle + "orange";
        case 4:
            return classStyle + "yellow";
        case 5:
            return classStyle + "green";
        case 6:
            return classStyle + "blue";
        case 7:
            return classStyle + "bluer";
        case 8:
            return classStyle + "purple";
    }
}

const lastCompleteDate = (date) => {
    if (date == "")
        return "";
    else
        return "Last Completed: " + date;
}

function Task(props) {
    const [cardState, setCardState] = useState(!props.taskInfo.off);
    const [cardColor] = useState(taskRatingToColor(props.taskInfo.rating));

    const buttonPush = () => {
        setCardState(!cardState);
    }

    const classes = useStyles();

    return (
        <div className={`Task-container ${cardState ? "" : "Task-container-off"}`} >
            <div className={`Task-button-container ${cardState ? cardColor : "Task-button-container-off"}`}>
                <Button className={`Task-button ${cardState ? "" : "Task-button-off"} ${classes.Button}`} onClick={buttonPush}></Button>
            </div>
            <div className='Task-info-container'>
                <div className='Task-name'>{props.taskInfo.name}</div>
                <div className='Task-description'>{props.taskInfo.description}</div>
                <div className='Task-last-complete'>{lastCompleteDate(props.taskInfo.lastComplete)}</div>
            </div>
        </div >
    );
};

export default Task;