import styles from './CartItemsList.module.scss'
import {useContext} from "react";
import {CartContext} from "@/context/CartContext";
import {CartItemElement} from "@/app/cart/_components/CartItem/CartItem";

export const CartItemsList = () =>{

    const {cart} = useContext(CartContext);

    return (
        <div className={styles.listBox}>
            <h3>Lista produktów</h3>

            <div className={styles.list}>
                {cart.map((item)=>(
                    <CartItemElement key={item.product.id} item={item}/>
                ))}
            </div>
        </div>
    )
}