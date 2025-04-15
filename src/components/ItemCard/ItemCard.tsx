import styles from './ItemCard.module.scss';
import {BestsellerItemType} from "@/data/Bestsellers";
import Image from "next/image";
import { Heart , ShoppingCart} from 'lucide-react';
import {MouseEvent, useState} from "react";

type Props = {
    item : BestsellerItemType
    handleItemClick: (event: MouseEvent<HTMLDivElement>, item: BestsellerItemType) => void;
}

export const ItemCard = ({item,handleItemClick} : Props) =>{

    const itemPrice = () => {
        return `${item.price} PLN`
    }

    return (
        <div onClick={(event) => handleItemClick(event, item)} className={styles.itemCardWrapper}>
            <Image src={item.mainImage} alt={item.mainImageAlt} fill sizes={'100%, (min-width : 1260px) 300px'} />

            <div data-heart className={`${styles.itemCardFav} ${item.isFavourite ? styles.itemCardFavActive : ''}`}>
                <Heart size={20}/>
            </div>
            <div className={styles.itemCart}>
                <ShoppingCart size={20} />
                <span>Dodaj do koszyka</span>
            </div>
            <div className={styles.itemName}>
                <span>{item.name}</span>
            </div>
            <div className={styles.itemPrice}>
                <span>{itemPrice()}</span>
            </div>
        </div>
    )
}