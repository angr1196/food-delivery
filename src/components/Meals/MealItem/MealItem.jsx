import { useContext } from 'react';
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
    const cartContext = useContext(CartContext);

    let formattedPrice = `$${props.item.price.toFixed(2)}`

    const addToCartHandler = (amount) => {
        cartContext.addItem({
            id: props.item.id,
            name: props.item.name,
            amount: amount,
            price: props.item.price,
        })

    }

    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.item.name}</h3>
                <div className={styles.description}>{props.item.description}</div>
                <div className={styles.price}>{formattedPrice}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} id={props.item.id} />
            </div>
        </li>
    )


}

export default MealItem;