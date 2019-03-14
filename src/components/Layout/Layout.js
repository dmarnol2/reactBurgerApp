import React, {Component} from 'react';
import Aux from '../../higherOrderComp/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
//this component allows us to use a wrapper around core component that we output to screen
// get props as an argument

//Turning layout to class so it can handle state for the backdrop
//replacing:
// const layout = (props) => (
// with:
class Layout extends Component {
    state ={
        showSidedrawer:true
    }
    // Now that this is a class we can implement a method
    sidedrawerClosedHandler=()=>{
        this.setState({showSidedrawer:false});
    }

    render () {
        return (
            //not allowed to have adjacent jsx elements. 2 options:
        //return array with each element has key
        // or return a higher order component. We are creating it in HOC called AUX file
        // or wrap everything in a div but not good here because we want adjacent components
        <Aux>
        {/* replace div with 3 components later on */}
<Toolbar/>
<SideDrawer open={this.state.showSidedrawer} closed={this.sidedrawerClosedHandler}/>
{/* normal main element provided by html */}
<main className={classes.Content}>
            {/* Since it now class based component must use "this* keyword*/}
    {this.props.children}
</main>
</Aux>
        );
    }
} 
export default Layout;