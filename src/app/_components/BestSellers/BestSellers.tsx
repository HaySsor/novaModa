'use client'
import styles from './BestSellers.module.scss';
import {BestsellersData} from "@/data/Bestsellers";
import {useEffect, useState} from "react";
import {ItemCard} from "@/components/ItemCard/ItemCard";
import {ElementType} from "@/Types/ClothesPage";
import {useRouter} from "next/navigation";

export const BestSellers = () => {
    const [bestSellers, setBestSellers] = useState<ElementType[]>([])

    useEffect(() => {
        setBestSellers([...BestsellersData])
        return () => {
            setBestSellers([]);
        }
    }, []);


    return (
        <div className={styles.bestSellersWrapper}>
            <h2 className={`sectionTitle`}> Bestsellery </h2>
            <div className={styles.bestSellersItems}>
                {bestSellers.map(item => {
                    return (
                        <ItemCard key={item.id} item={item}/>
                    )
                })}
            </div>
        </div>
    )
}