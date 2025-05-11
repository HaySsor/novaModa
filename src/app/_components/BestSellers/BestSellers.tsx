'use client'
import styles from './BestSellers.module.scss';
import {BestsellersData} from "@/data/Bestsellers";
import {MouseEvent, useEffect, useState} from "react";
import {ItemCard} from "@/components/ItemCard/ItemCard";
import {ElementType} from "@/Types/ClothesPage";
import {useRouter} from "next/navigation";

export const BestSellers = () =>{
    const [bestSellers, setBestSellers] = useState<ElementType[]>([])
    const router = useRouter()

    useEffect(() => {
        setBestSellers([...BestsellersData])
      return () =>{
          setBestSellers([]);
      }
    }, []);


    const handleItemClick = (e: MouseEvent<HTMLDivElement>, item:ElementType) => {
        const target = e.target as HTMLElement;
        const heartElement = target.closest('[data-heart]');
        const cardElement = target.closest('[data-cart]');
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
        } else if(cardElement){

        }else{

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