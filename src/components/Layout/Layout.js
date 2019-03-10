import React from 'react';
import Aux from '../../higherOrderComp/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
//this component allows us to use a wrapper around core component that we output to screen
// get props as an argument
const layout = (props) => (
    //not allowed to have adjacent jsx elements. 2 options:
        //return array with each element has key
        // or return a higher order component. We are creating it in HOC called AUX file
        // or wrap everything in a div but not good here because we want adjacent components
        <Aux>
            {/* replace div with 3 components later on */}
    <Toolbar/>  
    {/* normal main element provided by html */}
    <main className={classes.Content}>
        {props.children}
    </main>
    </Aux>
);

export default layout;