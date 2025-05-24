'use client'

import styles from './styles.module.scss'
import {useFetchCategoryProducts} from "@/hooks/useFetchCategoryProduckts";
import {ProductsList} from "@/views/ProductsList/ProductsList";

export default function Page() {

    const {products} = useFetchCategoryProducts('men')

    return (
        <div className={styles.pageWrapper}>
            <ProductsList products={products} />
        </div>
    )
}
