'use client'
import styles from './page.module.scss'
import {CartItemsList} from "@/app/cart/_components/CartItemsList/CartItemsList";
import {SumBox} from "@/app/cart/_components/SumBox/SumBox";

export default function Page(){

    return(
        <div className={styles.cartContainer}>
            <CartItemsList />
            <SumBox />
        </div>
    )
}