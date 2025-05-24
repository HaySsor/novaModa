// app/api/cart/route.ts
import { NextResponse } from 'next/server'
import type { ElementType } from '@/Types/ClothesPage'
import type { CartItem }    from '@/Types/CartItem'

const Cart: CartItem[] = []

export async function GET() {
    return NextResponse.json(Cart)
}

export async function POST(request: Request) {
    try {
        const { product, size } = (await request.json()) as { product: ElementType; size: string }
        const existing = Cart.find(ci => ci.product.id === product.id && ci.size === size)
        if (existing) {
            existing.quantity += 1
        } else {
            Cart.push({ product, quantity: 1, size })
        }
        return NextResponse.json(Cart, { status: 201 })
    } catch {
        return NextResponse.json({ error: 'Nieprawidłowe dane w żądaniu POST' }, { status: 400 })
    }
}

export async function PATCH(request: Request) {
    try {
        const body = await request.json() as { id: number; size: string; quantity?: number; newSize?: string }
        const { id, size, quantity, newSize } = body
        const idx = Cart.findIndex(ci => ci.product.id === id && ci.size === size)
        if (idx === -1) {
            return NextResponse.json({ error: `Produkt ${id} w rozmiarze ${size} nie istnieje` }, { status: 404 })
        }
        // zmiana rozmiaru
        if (newSize) {
            const existingNew = Cart.find(ci => ci.product.id === id && ci.size === newSize)
            const moving = Cart[idx]
            if (existingNew) {
                existingNew.quantity += moving.quantity
                Cart.splice(idx, 1)
            } else {
                moving.size = newSize
            }
            return NextResponse.json(Cart)
        }
        // aktualizacja ilości
        if (quantity !== undefined) {
            if (quantity <= 0) {
                Cart.splice(idx, 1)
            } else {
                Cart[idx].quantity = quantity
            }
            return NextResponse.json(Cart)
        }
        return NextResponse.json(Cart)
    } catch {
        return NextResponse.json({ error: 'Nieprawidłowe dane w żądaniu PATCH' }, { status: 400 })
    }
}

export async function DELETE(request: Request) {
    try {
        const { id, size, all } = (await request.json()) as { id: number; size: string; all?: boolean }
        const idx = Cart.findIndex(ci => ci.product.id === id && ci.size === size)
        if (idx === -1) {
            return NextResponse.json({ error: `Produkt ${id} w rozmiarze ${size} nie istnieje` }, { status: 404 })
        }
        if (all) {
            Cart.splice(idx, 1)
        } else {
            Cart[idx].quantity--
            if (Cart[idx].quantity <= 0) Cart.splice(idx, 1)
        }
        return NextResponse.json(Cart)
    } catch {
        return NextResponse.json({ error: 'Nieprawidłowe dane w żądaniu DELETE' }, { status: 400 })
    }
}
