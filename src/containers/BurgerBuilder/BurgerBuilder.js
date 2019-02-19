import React, {Component} from 'react';
import Aux from '../../HOC/Aux';

class BurgerBuilder extends Component{
    render(){  // important lifecycle method telling react what you want to displsy
        return(
            // need wrapping component because we are returning 2 adjacent components
            <Aux>
                <div>Graphical rep of Burger component</div>
                <div>Build Controls component</div>
            </Aux>


        );  // returning some jsx code
    }
}

export default BurgerBuilder;