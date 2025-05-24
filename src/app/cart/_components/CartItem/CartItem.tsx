'use client'
import styles from './CartItem.module.scss'
import {CartItem} from "@/Types/CartItem";
import {ChangeEvent, useEffect, useState, useContext} from "react";
import rawCategories from "@/data/CategoriesData.json";
import {CategoriesType} from "@/Types/Categories";
import { Trash2, Minus, Plus } from 'lucide-react';
import {CartContext} from "@/context/CartContext";

type Props = {
    item: CartItem
}

const Categories = rawCategories as unknown as CategoriesType

export const CartItemElement = ({item}: Props) => {
    const [productCategory, setProductCategory] = useState<string | null>(null)
    const [newQuantity, setNewQuantity] = useState(item.quantity)
    const [size, setSize] = useState(item.size)

    const { changeSize , setQuantity } = useContext(CartContext)
    const product = item.product;

    useEffect(() => {
        const catId = Number(product.categoryClothes)
        const catName = Categories[product.sex]?.[catId] ?? 'Nieznana kategoria'
        setProductCategory(catName)
    }, [])

    const handleChangeSize = async (e : ChangeEvent<HTMLSelectElement>) => {
        const newSize = e.target.value
        setSize(newSize)
        await changeSize(item.product.id, item.size, newSize)
    }

    const handleQuantity = async (option: 'add' | 'subtract') => {
        const updatedQty = option === 'add'
            ? newQuantity + 1
            : newQuantity - 1

        setNewQuantity(updatedQty)

        await setQuantity(product.id, size, updatedQty)
    }

    return (
        <div className={styles.item}>
            <div className={styles.itemLeft}>
                <img src={product.mainImage} alt={product.mainImageAlt} />
            </div>
            <div className={styles.itemRight}>
                <div  className={styles.itemInfoBox}>
                    <div className={styles.itemNameBox}>
                        <span className={styles.itemName}>{product.name}</span>
                        <div className={styles.itemCategory}>
                            <div className={styles.dot}></div>
                            <span>{productCategory} </span>
                        </div>
                    </div>
                    <div  className={styles.itemDelete}>
                        <Trash2 color={'lightcoral'} size={16} />
                    </div>
                </div>
                <div className={styles.itemOptions}>
                    <select className={styles.select} value={size} onChange={handleChangeSize}>
                        {product.availableSize.map((size) => (
                            <option key={size} value={size}>{size}</option>
                        ))}
                    </select>
                    <div className={styles.quantityBox}>
                        <button onClick={() => handleQuantity('subtract')} className={styles.quantityButton}>
                            <Minus size={8} />
                        </button>
                        <input className={styles.itemQuantity} type='number' value={newQuantity} readOnly={true} />
                        <button onClick={() => handleQuantity('add')} className={styles.quantityButton}>
                            <Plus size={8}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}