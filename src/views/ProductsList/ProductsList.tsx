import styles from 'ProductsList.module.scss'
import {ElementType} from "@/Types/ClothesPage";

type Props = {
    products : ElementType[]
}

export const ProductsList = ({products}:Props) => {

    return (
        <div className={styles.wrapper}>
            
        </div>
    )
}