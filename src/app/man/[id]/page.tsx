'use client'
import { useEffect, useState } from 'react'
import { ClothesPage, ElementType } from '@/Types/ClothesPage'
import dataJson from '@/data/MenClothes.json'
import { useParams, useSearchParams } from 'next/navigation'
import styles from './styles.module.scss'

export default function Man() {
    const [data, setData] = useState<ElementType[]>([])
    const params = useParams()
    const searchParams = useSearchParams()

    // rawId może być string | string[] | undefined
    const rawId = params.id
    // odczytujemy parametr "size" z query string
    const sizeParam = searchParams.get('size')  // string | null

    useEffect(() => {
        if (typeof rawId !== 'string') return

        const allItems = (dataJson as ClothesPage)[rawId] ?? []
        setData(allItems)
    }, [rawId, sizeParam])

    return (
        <div>
            {sizeParam && (
                <p>
                    Wybrano rozmiar: <strong>{sizeParam}</strong>
                </p>
            )}

            <div>
                {data.map(item => (
                    <div key={item.name}>
                        {item.name} — {item.price} zł
                    </div>
                ))}
            </div>
        </div>
    )
}
