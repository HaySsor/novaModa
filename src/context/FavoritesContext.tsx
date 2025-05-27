import {createContext, ReactElement, ReactNode, useEffect, useState} from 'react'
import type { ElementType } from '@/Types/ClothesPage'

export interface FavoritesContextValue {
    favorites: ElementType[]
    addFavorite:   (product: ElementType) => Promise<void>
    deleteFavorite: (product: ElementType) => Promise<void>
    syncFavorites: () => Promise<void>
}

export const FavoritesContext = createContext<FavoritesContextValue>({
    favorites:      [],
    addFavorite:    async () => {},
    deleteFavorite: async () => {},
    syncFavorites:  async () => {},
})

export const FavoritesContextProvider = ({ children }: { children: ReactNode | ReactElement }) => {
    const [favorites, setFavorites] = useState<ElementType[]>([])

    const syncFavorites = async () => {
        const res  = await fetch('/api/favorites')
        const data = (await res.json()) as ElementType[]
        setFavorites(data)
    }

    const addFavorite = async (product: ElementType) => {
        await fetch('/api/favorites', {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify({ product }),
        })
        await syncFavorites()
    }

    const deleteFavorite = async (product: ElementType) => {
        await fetch('/api/favorites', {
            method:  'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify({ id: product.id }),
        })
        await syncFavorites()
    }

    useEffect(() => {
        syncFavorites()
    }, [])

    const value: FavoritesContextValue = {
        favorites,
        addFavorite,
        deleteFavorite,
        syncFavorites,
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}