import React, {Component} from 'react';

import Burger from '../../components/Burger/Burger'
import Aux from '../../higherOrderComp/Aux';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: .5,
    cheese: .4,
    bacon: .6,
    meat: 1.3
}

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
    },
    totalPrice: 4
    }

    addIngredientHandler = (type) => {
        console.log("in addIngredientHandler")
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        // Do not want to mutate state directly so use process below, create new object then update state with it
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]= updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+priceAddition;
        this.setState({totalPrice:newPrice, ingredients: updatedIngredients});
        console.log(oldPrice+" oldPrice")
        console.log("after set state: "+this.state.totalPrice)
    }

    removeIngredientHandler= (type) => {

    }

    render(){  // important lifecycle method telling react what you want to displsy
        return(
            // need wrapping component because we are returning 2 adjacent components
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler}/>
            </Aux>


        );  // returning some jsx code
    }
}

export default BurgerBuilder;