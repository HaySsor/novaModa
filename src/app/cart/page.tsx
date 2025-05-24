'use client'
import styles from './page.module.scss'
import {CartItemsList} from "@/app/cart/_components/CartItemsList/CartItemsList";

export default function Page(){

    return(
        <div className={styles.cartContainer}>
            <CartItemsList />
        </div>
    )
}