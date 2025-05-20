'use client'
import styles from './woman.module.scss'
import {useEffect, useState} from "react";
import {ElementType} from "@/Types/ClothesPage";
import {ProductsList} from "@/views/ProductsList/ProductsList";


export default function Home() {
    const [products, setProducts] = useState<null | ElementType[]>()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('/api/woman')
                if (!res.ok) throw new Error(`Status ${res.status}`)
                const data: ElementType[] = await res.json()
                setProducts(data)
            } catch (err) {
                console.error('Błąd podczas ładowania produktów:', err)
            }
        }

        fetchProducts()
    }, [])
    if(products === null){
        return <div>Brak produktów</div>
    }

    return (
        products?.length && <div className={styles.pageWrapper}>
            <ProductsList products={products}/>
        </div>
    )
}