import React, {Component} from 'react';

import Burger from '../../components/Burger/Burger'
import Aux from '../../higherOrderComp/Aux';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

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
    purchasable:false, // activates or disables order button, it is sum of ingredients
    totalPrice: 4,
    purchasing: false  // this is used to show or hide the modal, show after order button was clicked
    }

    //needs to be arrow fn
    purchaseHandler=()=>{
        this.setState({purchasing:true});
    }

    updatePurchaseState(ingredients){
        // we are using passed in ingredients than what is in state
        // const ingredients = {
        //     ...this.state.ingredients
        // };
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]  // returning ingredients and value for given key

            })
            .reduce((sum, element) => {
                return sum+element;
            },0);
            this.setState({purchasable: sum>0})
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
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler= (type) => {
        console.log("in addIngredientHandler")
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){  // checks and make sure that there is an ingredient to remove if not then return
            return;         //cant create array to render from a negative value
        }
        const updatedCount = oldCount -1;
        // Do not want to mutate state directly so use process below, create new object then update state with it
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]= updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice:newPrice, ingredients: updatedIngredients});
        console.log(oldPrice+" oldPrice")
        console.log("after set state: "+this.state.totalPrice)
        this.updatePurchaseState(updatedIngredients);
    }

    render(){  // important lifecycle method telling react what you want to displsy
        const disabledInfo = {  // created to control buttons to be disabled
            ...this.state.ingredients   // copies object of state.ingredients into disabledInfo in immutable way
        };
        // loop through all keys in disabledInfo and check if count <=0, if so disable button
        for (let key in disabledInfo){
            //assign value of true/false
            disabledInfo[key]=disabledInfo[key]<=0 //pass to build controls
            //structure is {salad:true, meat:false etc}
        }
        // const disableOrderButton = this.state.purchasable;
        
        return(
            // need wrapping component because we are returning 2 adjacent components
            <Aux>
                {/* Modal will not be visible all the time */}
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal> 

                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    ordered = {this.purchaseHandler}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />
            </Aux>


        );  // returning some jsx code
    }
}

export default BurgerBuilder;