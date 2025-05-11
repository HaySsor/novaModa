'use client'

import styles from './styles.module.scss'
import {useFetchCategoryProducts} from "@/hooks/useFetchCategoryProduckts";
import Image from "next/image";

export default function Page() {

    const {products, loading} = useFetchCategoryProducts('men')

    return (
        <div className={styles.pageWrapper}>

        </div>
    )
}
