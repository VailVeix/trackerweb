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
        default:
            return classStyle + "off";
    }
}

function Task(props) {
    const [cardState, setCardState] = useState(!props.taskInfo.off);
    const [cardColor] = useState(taskRatingToColor(props.taskInfo.rating));

    const [isSending, setIsSending] = useState(false);

    const completeTask = () => {
        setCardState(!cardState);
        if(cardState){
            props.taskInfo.streak++;
        }
        else{
            props.taskInfo.streak--;
        }

        useCallback(async () => {
            if (isSending) return;
            setIsSending(true);
            await fetch("http://vailveix.com/completeTask.php", {crossDomain: true, body: JSON.stringify({task_id: props.taskInfo.id})})
                .then(res => res.json())
                .then(
                (response) => {
                    setIsLoaded(true);
                    setRows(response);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
                )
            setIsSending(false);
        }, [isSending]);
    }

    const classes = useStyles();

    if(props.taskInfo.off)
        return("");

    return (
        <div className='Task-container' onClick={completeTask}>
            <div className={`Task-button-container ${cardState ? cardColor : "Task-button-container-off"}`}>
                <Button className={`Task-button ${cardState ? "" : "Task-button-off"} ${classes.Button}`}></Button>
            </div>
            <div className='Task-info-container'>
                <div className='Task-name'>{props.taskInfo.name}</div>
                <div className='Task-description'>{props.taskInfo.description}</div>
                <div className='Task-description'>{props.taskInfo.streak}</div>
            </div>
        </div >
    );
};

export default Task;