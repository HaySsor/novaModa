// context/CartContext.tsx
'use client'
import React, { createContext, ReactElement, ReactNode, useState, useEffect } from 'react'
import type { ElementType } from '@/Types/ClothesPage'
import type { CartItem }     from '@/Types/CartItem'

export interface CartContextValue {
    cart: CartItem[]
    addItem: (product: ElementType, size: string) => Promise<void>
    removeAll: (productId: number, size: string) => Promise<void>
    setQuantity: (productId: number, size: string, quantity: number) => Promise<void>
    changeSize: (productId: number, oldSize: string, newSize: string) => Promise<void>
    syncCart: () => Promise<void>
}

export const CartContext = createContext<CartContextValue>({
    cart: [],
    addItem: async () => {},
    removeAll: async () => {},
    setQuantity: async () => {},
    changeSize: async () => {},
    syncCart: async () => {},
})

export const CartContextProvider = ({ children }: { children: ReactElement | ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([])

    const syncCart = async () => {
        const res = await fetch('/api/cart')
        const data: CartItem[] = await res.json()
        setCart(data)
    }

    const addItem = async (product: ElementType, size: string) => {
        await fetch('/api/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ product, size }),
        })
        await syncCart()
    }

    const removeAll = async (productId: number, size: string) => {
        await fetch('/api/cart', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: productId, size, all: true }),
        })
        await syncCart()
    }

    const setQuantity = async (productId: number, size: string, quantity: number) => {
        await fetch('/api/cart', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: productId, size, quantity }),
        })
        await syncCart()
    }

    const changeSize = async (productId: number, oldSize: string, newSize: string) => {
        await fetch('/api/cart', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: productId, size: oldSize, newSize }),
        })
        await syncCart()
    }

    useEffect(() => {
        syncCart()
    }, [])

    return (
        <CartContext.Provider value={{ cart, addItem, removeAll, setQuantity, changeSize, syncCart }}>
            {children}
        </CartContext.Provider>
    )
}