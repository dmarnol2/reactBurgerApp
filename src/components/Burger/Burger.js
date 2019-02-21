import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
        // props is an object not an array so we cant loop through
        // must transform object to array so we can loop and get values
        // Object below is a JS object not a react object
        //change const below to let since we are going to change value of transformedIngredients further below
        let transformedIngredients = Object.keys(props.ingredients)
        //chain a method and we can use map since keys returns an array
        // map executes a fn on each element in the input array
            .map(ingredientKey => {
                return [...Array(props.ingredients[ingredientKey])].map((_,index)=>{
                    return <BurgerIngredient key={ingredientKey+index} type={ingredientKey}/>;
                });
            }) //returns array of keys ie {salad,meat,bacon,cheese}
            .reduce((array,element)=>{
                return array.concat(element)
            },[]);

        console.log(transformedIngredients);
        if(transformedIngredients.length===0){
            transformedIngredients=<p>Please start adding ingredients</p>
        }

        return(
         
            <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
            </div>


        );  // returning some jsx code
    };
    

export default burger;