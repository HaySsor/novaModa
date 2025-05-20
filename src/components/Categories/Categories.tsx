'use client'
import styles from './Categories.module.scss'
import {useEffect, useState} from "react";
import {CategoriesType} from "@/Types/Categories";
import CategoriesData from'@/data/CategoriesData.json'
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
    sex : 'men' | 'woman'
}

export const Categories = ({sex} :Props) =>{
    const [categories, setCategories] = useState<CategoriesType>({})
    const pathname = usePathname();
    const cleanPath = pathname.split('?')[0]

    useEffect(() => {
        const categories = CategoriesData
        setCategories(categories[sex])

        return () => {
            setCategories({})
        }
    }, []);


    return (
        <div className={styles.categoriesWrapper}>
            <div className={styles.categories}>
                {categories && Object.entries(categories).map(([key, value]) => {
                    const href = `/${sex}/${key}`
                    const isActive = cleanPath === href
                    return <Link
                        href={href}
                        key={key}
                        className={[
                            styles.category,
                            isActive ? styles.activeCategory : ''
                        ].join(' ')}
                    >
                        {value}
                    </Link>
                })}
            </div>
        </div>
    )
}