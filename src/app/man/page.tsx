'use client'
import styles from './men.module.scss'
import {useEffect, useState} from "react";
import dataJson from '@/data/MenClothes.json'
import {ClothesPage} from "@/Types/ClothesPage";
import {PageWrapper} from "@/components/PageWrapper/PageWrapper";


export default function Man() {
    const [data, setData] = useState<ClothesPage>({})

    useEffect(() => {
        setData(dataJson)

        return () => {
            setData({})
        }
    }, []);


    return (
        <div className={styles.pageWrapper}>

        </div>
    );
}