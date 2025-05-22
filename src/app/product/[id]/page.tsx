'use client'
import {useEffect, useState} from 'react'
import {useParams} from 'next/navigation'
import type {ElementType} from '@/Types/ClothesPage'
import styles from './page.module.scss'
import rawCategories from '@/data/CategoriesData.json'
import {CategoriesType} from "@/Types/Categories";
import {ProductImagesCarousel} from "@/components/ProductImagesCarousel/ProductImagesCarousel";
import {Button} from "@/components/Button/Button";

const Categories = rawCategories as unknown as CategoriesType

export default function ProductPage() {
    const {id} = useParams()
    const [product, setProduct] = useState<ElementType | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [productCategory, setProductCategory] = useState<string | null>(null)
    const [selectSize, setSelectSize] = useState<string>('')
    const [noSizeError, setNoSizeError] = useState<boolean>(false)

    useEffect(() => {
        if (!id) return
        fetch(`/api/product/${id}`)
            .then(res => {
                if (!res.ok) throw new Error(`Status ${res.status}`)
                return res.json() as Promise<ElementType>
            })
            .then(data => {
                setProduct(data)

                const catId = Number(data.categoryClothes)
                const catName = Categories[data.sex]?.[catId] ?? 'Nieznana kategoria'
                setProductCategory(catName)
            })
            .catch(console.error)
    }, [id])

    const handleAddToCart = () => {
        if(!selectSize){
            setNoSizeError(true)
            return
        }
    }

    const handleSizeChange = (size : string) =>{
        setSelectSize(size)
        setNoSizeError(false)
    }

    const handleAddToFavorite = () => {
        if(!selectSize){
            setNoSizeError(true)
            return
        }
    }

    return (
        product !== null && (
            <div className={styles.container}>
                <div className={styles.imageBox}>
                    <ProductImagesCarousel images={product.images}/>
                </div>
                <div className={styles.productInfo}>
                    <div className={styles.productTop}>
                        <span className={styles.categoryName}>{productCategory}</span>
                        <h2 className={styles.productName}>{product.name}</h2>
                    </div>
                    <div className={styles.productMiddle}>
                        <p>{product.description}</p>
                        <div className={styles.priceBox}>
                            <span> <span className={styles.price}>{product.price}</span> PLN </span>
                        </div>
                        <div className={styles.productMiddleBottom}>
                            <div className={`${styles.sizeContainer} ${noSizeError ? styles.noSizeSelect : ''}`}>
                                {noSizeError && <span className={styles.sizeError}> Najpierw wybierz rozmiar </span>}
                                <span> Wybierz rozmiar: </span>
                                <div className={styles.sizeBox}>
                                    {product.availableSize.map(size => {
                                        return (
                                            <div
                                                onClick={() => handleSizeChange(size)}
                                                className={`${styles.sizeItem} ${size === selectSize ? styles.activeSizeItem : ''}`}
                                                key={size}>
                                                {size}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className={styles.buttonsBox}>
                                <Button
                                    onClick={handleAddToFavorite}
                                    isFull={true}
                                    text={'Dodaj do ulubionych'}
                                    icon={'heart'}/>
                                <Button
                                    onClick={handleAddToCart}
                                    isFull={true}
                                    text={'Dodaj do koszyka'}
                                    icon={'plus'}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    )
}
