import {CartItem} from "@/Types/CartItem";
import {createContext, ReactElement, useReducer, useState} from "react";
import {ElementType} from "@/Types/ClothesPage";


export interface CartContextValue {
    cart: CartItem[]
    addItem: (product: ElementType, size: string) => Promise<void>
    removeOne: (productId: number, size: string) => Promise<void>
    removeAll: (productId: number, size: string) => Promise<void>
    setQuantity: (productId: number, size: string, quantity: number) => Promise<void>
}

export const CartContext = createContext<CartContextValue>({
    cart: [],
    addItem: async () => {},
    removeOne: async () => {},
    removeAll: async () => {},
    setQuantity: async () => {},
})

export interface CartContextValue {
    cart: CartItem[]
    addItem: (product: ElementType, size: string) => Promise<void>
    removeOne: (productId: number, size: string) => Promise<void>
    removeAll: (productId: number, size: string) => Promise<void>
    setQuantity: (productId: number, size: string, quantity: number) => Promise<void>
}

export const CartContextProvider = ({ children }: { children: ReactElement }) => {
    const [cart, setCart] = useState<CartItem[]>([])

    // Helper: synchronizuj cały koszyk z API GET
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

    const removeOne = async (productId: number, size: string) => {
        await fetch('/api/cart', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: productId, size }),
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

    const setQuantity = async (
        productId: number,
        size: string,
        quantity: number
    ) => {
        await fetch('/api/cart', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: productId, size, quantity }),
        })
        await syncCart()
    }

    const value: CartContextValue = {
        cart,
        addItem,
        removeOne,
        removeAll,
        setQuantity,
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}