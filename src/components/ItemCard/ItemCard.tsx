import styles from './ItemCard.module.scss';
import Image from "next/image";
import { Heart } from 'lucide-react';
import {MouseEvent} from "react";
import {ElementType} from "@/Types/ClothesPage";
import {useRouter} from "next/navigation";

type Props = {
    item : ElementType
}

export const ItemCard = ({item} : Props) =>{
    const router = useRouter()

    const handleItemClick = (e: MouseEvent<HTMLDivElement>, item:ElementType) => {
        const target = e.target as HTMLElement;
        const heartElement = target.closest('[data-heart]');
        if(heartElement){

        } else{
            router.push(`/product/${item.id}`)
        }
    };

    const itemPrice = () => {
        return `${item.price} PLN`
    }

    return (
        <div onClick={(event) => handleItemClick(event, item)} className={styles.itemCardWrapper}>
            <Image src={item.mainImage} alt={item.mainImageAlt} fill sizes={'100%, (min-width : 1260px) 300px'} />

            <div data-heart className={`${styles.itemCardFav} ${item.isFavourite ? styles.itemCardFavActive : ''}`}>
                <Heart size={20}/>
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