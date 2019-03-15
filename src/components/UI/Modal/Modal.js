import React, {Component} from 'react';
import classes from './Modal.css';
import Aux from '../../../HOC/Aux';
import Backdrop from '../Backdrop/Backdrop';

// convert to class
class Modal extends Component{

    shouldComponentUpdate(nextProps, nextState){
        console.log("in should comp update of MODAL");
        //below is the same as just returning the check
        // if(nextProps.show !== this.props.show){
        //     return true;
        // }
        return nextProps.show !== this.props.show;
    };

    componentWillUpdate(){
        console.log("in compwillUpdate of MODAL");
    }

    render(){
        return(

            <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
    <div className={classes.Modal}
    style={{
        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: this.props.show ? '1':'0'
    }}>
        {this.props.children}
    </div>
    </Aux>

        );
    }

}
export default Modal;