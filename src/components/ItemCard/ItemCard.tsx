import styles from './ItemCard.module.scss';
import Image from "next/image";
import { Heart , ShoppingCart} from 'lucide-react';
import {MouseEvent} from "react";
import {ElementType} from "@/Types/ClothesPage";

type Props = {
    item : ElementType
    handleItemClick: (event: MouseEvent<HTMLDivElement>, item: ElementType) => void;
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
            <div data-cart className={styles.itemCart}>
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