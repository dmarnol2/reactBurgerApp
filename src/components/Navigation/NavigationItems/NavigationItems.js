import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) =>(
<ul className={classes.NavigationItems}>
    {/* for props that are boolean true do not need to provie for example active={true} */}
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
</ul>


);

export default navigationItems;