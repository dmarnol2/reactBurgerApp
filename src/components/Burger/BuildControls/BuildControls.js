import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
    <p>Burger Price: <strong>{props.price.toFixed(2)}</strong></p> 
        {/* Looping through controls with use of map fn */}
        {controls.map(ctrl=>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            //we need to keep track of which type this BuildControl is OF
            added={()=>props.ingredientAdded(ctrl.type)}
            removed={()=>props.ingredientRemoved(ctrl.type)}
            // disabled for a given control type, disabled is object not function
            disabled={props.disabled[ctrl.type]}/> 
        ))}
        <button className={classes.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>

);

export default buildControls;