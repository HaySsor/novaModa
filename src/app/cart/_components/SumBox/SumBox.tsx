import styles from './SumBox.module.scss';
import {CartContext} from "@/context/CartContext";
import {useContext} from "react";
import {Button} from "@/components/Button/Button";

const SEND_PRICE = 30

export const SumBox = () => {

    const {cart} = useContext(CartContext);

    const itemsPrice = cart.reduce((previousValue, {product, quantity}) => {
        return previousValue  + ( product.price * quantity );
    }, 0).toFixed(2)

    const sumPrice = parseFloat(itemsPrice + SEND_PRICE).toFixed(2)


    return (
        <div className={styles.sumBoxContainer}>
            <h3>
                Podsumowanie zamówienia
            </h3>
            <div className={styles.sumBox}>
                <div className={styles.sumBoxMain}>
                    <div className={styles.sumBoxMainTop}>
                        <div className={styles.infoRow}>
                            <span>Suma Produktów ( {cart.length} )</span>
                            <span> {itemsPrice} PLN</span>
                        </div>
                        <div className={styles.infoRow}>
                            <span>Koszt wysyłki</span>
                            <span> {SEND_PRICE} PLN</span>
                        </div>
                    </div>
                    <div className={styles.sumBoxMainBottom}>
                        <div className={styles.infoRow}>
                            <span>Razem: </span>
                            <span> {sumPrice} PLN</span>
                        </div>
                        <div className={styles.infoRow}>
                            <span>U ciebie za </span>
                            <span> 2 dni</span>
                        </div>
                    </div>
                    <div className={styles.buttonBox}>
                        <Button onClick={()=>{}} isFull={true} text={'Zapłać'} />
                    </div>
                </div>
            </div>
        </div>
    )
}