'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { FilterType } from '@/components/FilterBody/FilterBody'

export function useSyncFilterToUrl(useFilter: FilterType) {
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        // 1) Budujemy nowe parametry
        const params = new URLSearchParams()

        if (useFilter.size.length > 0) {
            // rozmiary w jednym parametrze po przecinku
            params.set('size', useFilter.size.join(','))
        }

        if (useFilter.sale) {
            params.set('sale', '1')
        }

        if (useFilter.priceRage.length > 0) {
            params.set('price', useFilter.priceRage.join(','))
        }

        // 2) Sklejamy ścieżkę z query
        const qs = params.toString()
        const newUrl = qs ? `${pathname}?${qs}` : pathname

        // 3) Zastępujemy obecną pozycję w historii
        router.replace(newUrl)
    }, [useFilter, pathname, router])
}
