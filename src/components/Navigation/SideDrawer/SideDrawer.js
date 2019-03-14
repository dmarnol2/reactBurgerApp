import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../HOC/Aux';

const sideDrawer = (props) => {

    let attachedClasses=[classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses=[classes.SideDrawer, classes.Open];
    }

    return(
        // Use Aux so we can return multiple components
        <Aux>
            {/* Backdrop requires show property to be true to show backdrop */}
            <Backdrop 
                show={props.open} 
                clicked={props.closed}/>
            {/* Since we cant pass arrays we must create string and we do that with join */}
        <div className={attachedClasses.join(' ')}>
        
        {/* instead of wrapping LOGO in div and calling css class we could have: */}
        {/* passed a props for height like <Logo height="11%"> */}
        {/* and in Logo.js accept height prop like style={{height: props.height}} */}
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav >
                <NavigationItems/>
            </nav>
        </div>
        </Aux>


    );

};

export default sideDrawer;