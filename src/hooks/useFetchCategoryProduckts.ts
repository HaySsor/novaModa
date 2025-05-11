import {useEffect, useState} from "react";
import type {ElementType} from "@/Types/ClothesPage";
import {useParams, useSearchParams} from "next/navigation";


export const useFetchCategoryProducts = (category : 'men' | 'woman') => {
    const { id } = useParams()

    const searchParams = useSearchParams()
    const [products, setProducts] = useState<ElementType[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!id) return

        setLoading(true)
        const sizes  = searchParams.get('size')?.split(',')              ?? []
        const sale   = searchParams.get('sale') === '1'
        const prices = searchParams.get('price')?.split(',').map(x=>+x) ?? []
        const q = new URLSearchParams()
        if (sizes.length)  q.set('size', sizes.join(','))
        if (sale)         q.set('sale','1')
        if (prices.length) q.set('price', prices.join(','))

        const apiPath = `/api/${category}/${id}${q.toString() ? `?${q}` : ''}`

        fetch(apiPath)
            .then(res => {
                if (!res.ok) throw new Error(`API zwróciło ${res.status}`)
                return res.json() as Promise<ElementType[]>
            })
            .then(setProducts)
            .catch(console.error)
            .finally(() => setLoading(false))
    }, [id, searchParams.toString()])

    return {products, loading}
}