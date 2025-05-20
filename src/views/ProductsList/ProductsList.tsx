import styles from './ProductsList.module.scss'
import {ElementType} from "@/Types/ClothesPage";
import {ItemCard} from "@/components/ItemCard/ItemCard";

type Props = {
    products : ElementType[]
}

export const ProductsList = ({products}:Props) => {

    return (
        <div className={styles.wrapper}>
            {products.map(el =>{
                return (
                    <ItemCard item={el} key={el.id}/>
                )
            })}
        </div>
    )
}