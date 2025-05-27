// app/ClientProviders.tsx
'use client'

import {ReactNode} from 'react'
import {CartContextProvider} from '@/context/CartContext'
import {FavoritesContextProvider} from '@/context/FavoritesContext'


type Props = { children: ReactNode }

export function ClientProviders({children}: Props) {

    return (
        <CartContextProvider>
            <FavoritesContextProvider>
                {children}
            </FavoritesContextProvider>
        </CartContextProvider>
    )
}
