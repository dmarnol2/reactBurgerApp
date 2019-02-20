import React, {Component} from 'react';

import Burger from '../../components/Burger/Burger'
import Aux from '../../higherOrderComp/Aux';

class BurgerBuilder extends Component{
    render(){  // important lifecycle method telling react what you want to displsy
        return(
            // need wrapping component because we are returning 2 adjacent components
            <Aux>
                <Burger/>
                <div>Build Controls component</div>
            </Aux>


        );  // returning some jsx code
    }
}

export default BurgerBuilder;