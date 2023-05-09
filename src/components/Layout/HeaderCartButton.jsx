import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css"
import CartContext from "../../store/cart-context";



const HeaderCartButton = (props) => {

    const cartContext = useContext(CartContext);

    const cartItemsAmount = cartContext.items.reduce((currentValue, item)=>{ return currentValue + item.amount}, 0)

    return (
        <button className={styles.button} onClick={props.onShowCart}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Корзина</span>
            <span className={styles.badge}> 
                {cartItemsAmount}
            </span>
        </button>
    )

}

export default HeaderCartButton;