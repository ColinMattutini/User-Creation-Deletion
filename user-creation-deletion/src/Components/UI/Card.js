import classes from './Card.module.css';
import React from 'react';


const Card = (props) => {
    const classes = 'card ' + props.className;
    return <div classname={classes.card}>{props.children}</div>
}

export default Card;