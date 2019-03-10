import React from 'react';
import classes from './Button.css';

const button = (props) =>(
    <button
        className={[classes.Button, classes[props.buttonType]].join(' ')} // .join cuz its array and we need string
        onClick={props.clicked}>
        {props.children}</button>
);

export default button;