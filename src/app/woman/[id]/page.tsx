'use client'
import {useFetchCategoryProducts} from "@/hooks/useFetchCategoryProduckts";
import styles from "@/app/men/[id]/styles.module.scss";
import {ProductsList} from "@/views/ProductsList/ProductsList";

export default function Page() {

    const {products, loading} = useFetchCategoryProducts('woman')

    return (
        <div className={styles.pageWrapper}>
            <ProductsList products={products} />
        </div>
    )
}
