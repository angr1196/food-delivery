
import styles from './PromoText.module.css'

const PromoText = () => {

    return (
        <section className={styles['promo-text']}>
            <h2>
                Доставка суши EGERSUND
            </h2>
            <p>
                EGERSUND - это онлайн суши-ресторан, в котором любимые суши и сашими,
                роллы и другие блюда национальной японской кухни делает команда
                профессиональных поваров.
            </p>
            <p>
                Быстрая работа и качественная продукция, а также самые настоящие
                компоненты придают хороший вкус блюдам, дарят наслаждение от трапезы.
            </p>
        </section>
    )

}

export default PromoText;