'use client'
import styles from './BestSellers.module.scss'
import {BestsellerItemType, BestsellersData} from "@/data/Bestsellers";
import {ItemCard} from "@/components/ItemCard/ItemCard";
import {MouseEvent, MouseEventHandler, useEffect, useState} from "react";

export const BestSellers = () =>{
    const [bestSellers, setBestSellers] = useState<BestsellerItemType[]>([]);

    useEffect(() => {
        setBestSellers([...BestsellersData])
      return () =>{
          setBestSellers([]);
      }
    }, []);


    const handleItemClick = (e: MouseEvent<HTMLDivElement>, item:BestsellerItemType) => {
        const target = e.target as HTMLElement;
        const heartElement = target.closest('[data-heart]');
        if(heartElement){
            setBestSellers(prevState => {
                return  prevState.map(el =>{
                    if(el.id === item.id){
                        return {...el, isFavourite: !el.isFavourite};
                    }else{
                        return el
                    }
                })
            })
        }
    };

    return (
        <div className={styles.bestSellersWrapper}>
            <h2 className={`sectionTitle`}> Bestsellery </h2>

            <div className={styles.bestSellersItems}>
                {bestSellers.map(item => {
                    return (
                        <ItemCard key={item.id} item={item} handleItemClick={handleItemClick} />
                    )
                })}
            </div>
        </div>
    )
}