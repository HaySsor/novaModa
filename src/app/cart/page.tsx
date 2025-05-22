'use client'
import styles from './page.module.scss';
import {useEffect, useState} from "react";
import {CartItem} from "@/Types/CartItem";



export default function Page(){
    const [cart, setCart] = useState<CartItem[]>([])

    useEffect(() => {
        fetch('/api/card')
            .then(res => res.json())
            .then(data => setCart(data))
            .catch(console.error)
    }, [])


    return(
        <div>
            {cart.length > 0 && cart.map(({product, quantity}) => (
                <div>
                    name : {product.name}
                </div>
            ))}
        </div>
    )
}