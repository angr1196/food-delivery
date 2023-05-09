import { useContext } from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css'
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {

    const cartContext = useContext(CartContext);
    const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
    const hasItems =cartContext.items.length>0;


    const removeItemHandler = (id) => {
        cartContext.removeItem(id);

    }

    const addItemHandler = (item) => {
        cartContext.addItem({...item, amount: 1});

    }

    const cartItems =
        <ul className={styles['cart-items']}>
            {cartContext.items.map(item => <CartItem
            key={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                onRemove={removeItemHandler.bind(null, item.id)}
                onAdd={addItemHandler.bind(null, item)} />)}
        </ul>

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Итого</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onHideCart}>Закрыть</button>
                {hasItems&&<button className={styles.button}>Оформить заказ</button>}
            </div>
        </Modal>
    )
}

export default Cart;