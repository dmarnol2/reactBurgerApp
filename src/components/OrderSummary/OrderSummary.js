import React, {Component} from 'react';
import Aux from '../../HOC/Aux';
import Button from '../UI/Button/Button';

//convert to class so we can add lifecycle hooks to prevent unnecessary rerendering
// const orderSummary = (props) => {
    class OrderSummary extends Component {

        componentWillUpdate(){
            console.log("orderSummary updated")
        };
        render(){
            const ingredientsSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            // double curly brace is used for JS, cap 1st letter of ingredient
            // return list of igKey which is ingredient and props.ingredients[igKey] which is value of the igKey
            return (<li key={igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
                    </li>
                    )
            })
            return(
    <Aux>
        <h3>Your Order</h3>
        <p>A burger with the following ingredients:</p>
        <ul>
            {/* using default css styling of Aux */}
            {ingredientsSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button
            buttonType={'Danger'} 
            clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button
            buttonType={'Success'}
            clicked={this.props.purchaseContinued}>CONTINUE</Button>
    </Aux>
            );
    }
}
    
export default OrderSummary;

//     }=(props)=>{
//     // const ingredientsSummary = props.ingredients; // this is an object want an array to use below
//     const ingredientsSummary = Object.keys(props.ingredients)
//         .map(igKey => {
//             // double curly brace is used for JS, cap 1st letter of ingredient
//             // return list of igKey which is ingredient and props.ingredients[igKey] which is value of the igKey
//             return (<li key={igKey}>
//                     <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
//                     </li>
//                     )
//             })
//     // need wrapping div since we have multiple elements and we already
//     // have one in AUX
//     return(
//     <Aux>
//         <h3>Your Order</h3>
//         <p>A burger with the following ingredients:</p>
//         <ul>
//             {/* using default css styling of Aux */}
//             {ingredientsSummary}
//         </ul>
//         <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
//         <p>Continue to checkout?</p>
//         <Button
//             buttonType={'Danger'} 
//             clicked={props.purchaseCancelled}>CANCEL</Button>
//         <Button
//             buttonType={'Success'}
//             clicked={props.purchaseContinued}>CONTINUE</Button>
//     </Aux>
//     );

// };