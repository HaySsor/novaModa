'use client'
import styles from './CartMobileButton.module.scss'
import { ShoppingCart } from 'lucide-react';
import {useContext, useEffect} from "react";
import {CartContext} from "@/context/CartContext";
import {useRouter} from "next/navigation";

export const CartMobileButton = () => {
    const {cart} = useContext(CartContext);
    const router = useRouter()

    const moveToCard = () => {
        router.push(`/cart`)
    }

    return (
        <div onClick={moveToCard} className={styles.cartButton}>
            <ShoppingCart size={22} fill="#333" />

            <div className={styles.cartButtonCounter}>
                <span>{cart.length}</span>
            </div>
        </div>
    )
}