'use client'
import styles from './CartFavButton.module.scss'
import { ShoppingCart, Heart } from 'lucide-react';
import {useContext} from "react";
import {CartContext} from "@/context/CartContext";
import {useRouter} from "next/navigation";

export const CartFavButton = () => {
    const {cart} = useContext(CartContext);
    const router = useRouter()

    const moveToCard = () => {
        router.push(`/cart`)
    }
    const moveToFav = () =>{
        router.push(`/favorites`)
    }

    return (
        <div className={styles.cartFavBox}>
            <div onClick={moveToCard}  className={styles.cartButton}>
                <ShoppingCart size={20} />
                <div className={styles.cartCounter}>
                    <span>{cart.length}</span>
                </div>
            </div>
            <div onClick={moveToFav} className={styles.favButton}>
                <Heart size={20} fill={'#F08080FF'} stroke={'#F08080FF'}/>
            </div>
        </div>
    )
}