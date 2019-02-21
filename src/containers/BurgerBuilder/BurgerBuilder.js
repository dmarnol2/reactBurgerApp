import React, {Component} from 'react';

import Burger from '../../components/Burger/Burger'
import Aux from '../../higherOrderComp/Aux';

class BurgerBuilder extends Component{
    // 1 way to initialize state but we will use following way
    // constructor (props) = {
    //     super(props)
    //     this.state={...}

    // }

   state ={
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    }
    }

    render(){  // important lifecycle method telling react what you want to displsy
        return(
            // need wrapping component because we are returning 2 adjacent components
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls component</div>
            </Aux>


        );  // returning some jsx code
    }
}

export default BurgerBuilder;