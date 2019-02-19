import React, {Component} from 'react'; // because we are writing some jsx
import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';
// functional component ie stateless
// CAN use proptypes on functional components but we are going to work on switching to class type components
// const burgerIngredient = (props) =>{ // use curly braces because we will perform some logic before return
class BurgerIngredient extends Component {
    render(){
        
            let ingredient = null;
            switch (this.props.type){ // add 'this' to props since inside a class and this is needed to access props
                case ('bread-bottom'):
                    ingredient=<div className={classes.BreadBottom}></div>;
                    break;
                case ('bread-top'):
                    ingredient=(
                    <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                    </div>
                );
                    break;
                case ('meat'):
                    ingredient = <div className={classes.Meat}></div>;
                    break;
                case ('cheese'):
                    ingredient = <div className={classes.Cheese}></div>;
                    break;
                case ('salad'):
                    ingredient = <div className={classes.Salad}></div>;
                    break;
                case ('bacon'):
                    ingredient = <div className={classes.Bacon}></div>;
                    break;
                default:
                    ingredient = null;
    } // end swithch statement
    return ingredient;
}

};

BurgerIngredient.propTypes ={
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;
// } = (props) =>{
//     let ingredient = null;
//     switch (props.type){
//         case ('bread-bottom'):
//             ingredient=<div className={classes.BreadBottom}></div>;
//             break;
//         case ('bread-top'):
//             ingredient=(
//                 <div className={classes.BreadTop}>
//                     <div className={classes.Seeds1}></div>
//                     <div className={classes.Seeds2}></div>
//                 </div>
//             );
//             break;
//         case ('meat'):
//             ingredient = <div className={classes.Meat}></div>;
//             break;
//         case ('cheese'):
//             ingredient = <div className={classes.Cheese}></div>;
//             break;
//         case ('salad'):
//             ingredient = <div className={classes.Salad}></div>;
//             break;
//         case ('bacon'):
//             ingredient = <div className={classes.Bacon}></div>;
//             break;
//         default:
//             ingredient = null;
//     } // end swithch statement

// };

// export default burgerIngredient;