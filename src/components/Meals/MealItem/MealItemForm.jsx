
import { useRef } from 'react';
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css'
import { useState } from 'react';

const MealItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();

const onSubmitHandler =(event)=>{
    event.preventDefault();

    const inputAmount = amountInputRef.current.value;
    if(inputAmount.trim().length===0||+inputAmount<1){
        setAmountIsValid(false);
        return;
    }

    props.onAddToCart(+inputAmount);

}

    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <Input label='Количество'
                input={{
                    id: props.id,
                    type: 'number',
                    min: '1',
                    step: '1',
                    defaultValue: '1',
                }} ref={amountInputRef} />
            <button>Добавить</button>
            {!amountIsValid&&<p>Введите правильное количество</p>}
        </form>
    )
}

export default MealItemForm;