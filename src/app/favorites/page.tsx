'use client'
import styles from './page.module.scss'
import {useEffect, useState} from "react";
import {ElementType} from "@/Types/ClothesPage";
import {Heart} from 'lucide-react'
import {ItemCard} from "@/components/ItemCard/ItemCard";

export default function FavoritePage() {
    const [favorites, setFavorites] = useState<ElementType[]>([])

    useEffect(() => {
        fetch("/api/favorites")
            .then(res => res.json())
            .then(data => setFavorites(data))
    }, []);


    return (
        <div className={styles.favPageWrapper}>
            {favorites.length > 0 ? (
                <div className={styles.favBox}>
                    <h2>Twoje ulubione produkty</h2>
                    <div className={styles.favItemList}>
                        {favorites.map((item: ElementType) => {
                            return (
                                <ItemCard item={item} key={item.id}/>
                            )
                        })}
                    </div>
                </div>

            ) : (
                <div className={styles.favPageCap}>
                    <Heart size={30}/>
                    <span> Nie dodałeś nic do ulubionych </span>
                </div>
            )}
        </div>
    )
}