// app/ClientProviders.tsx
'use client'

import {ReactNode} from 'react'
import {CartContextProvider} from '@/context/CartContext'


type Props = { children: ReactNode }

export function ClientProviders({children}: Props) {

    return (
        <CartContextProvider>
            {children}
        </CartContextProvider>
    )
}
