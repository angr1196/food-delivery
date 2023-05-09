
import styles from './Header.module.css'
import mainImage from '../../assets/sushi.jpg'
import React from 'react'
import HeaderCartButton from './HeaderCartButton'


const Header = (props) => {

    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>EGERSUND SUSHI</h1>
                <HeaderCartButton onShowCart={props.onShowCart}/>
            </header>
            <div className={styles["main-image"]}>
                <img src={mainImage} alt="main sushi" />
            </div>
        </React.Fragment>
    )
}

export default Header;