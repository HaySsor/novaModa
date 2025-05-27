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

    const moveToProductPage = () =>{
        router.push(`/product/${item.id}`)
    }

    const itemPrice = () => {
        return `${item.price} PLN`
    }

    return (
        <div onClick={moveToProductPage} className={styles.itemCardWrapper}>
            <Image src={item.mainImage} alt={item.mainImageAlt} fill sizes={'100%, (min-width : 1260px) 300px'} />
            <div className={styles.itemName}>
                <span>{item.name}</span>
            </div>
            <div className={styles.itemPrice}>
                <span>{itemPrice()}</span>
            </div>
        </div>
    )
}