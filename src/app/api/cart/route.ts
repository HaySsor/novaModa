// app/api/cart/route.ts
import { NextResponse } from 'next/server'
import type { ElementType } from '@/Types/ClothesPage'
import type {CartItem} from "@/Types/CartItem";

const Cart: CartItem[] = []

export async function GET() {
    return NextResponse.json(Cart)
}

export async function POST(request: Request) {
    try {
        // Oczekujemy body: { product: ElementType, size: string }
        const { product, size } = (await request.json()) as {
            product: ElementType
            size: string
        }

        // Szukamy w koszyku tej samej pozycji (id + size)
        const existing = Cart.find(
            ci => ci.product.id === product.id && ci.size === size
        )

        if (existing) {
            existing.quantity += 1
        } else {
            Cart.push({ product, quantity: 1, size })
        }

        return NextResponse.json(Cart, { status: 201 })
    } catch {
        return NextResponse.json(
            { error: 'Nieprawidłowe dane w żądaniu POST' },
            { status: 400 }
        )
    }
}

export async function PATCH(request: Request) {
    try {
        // Oczekujemy body: { id: number, size: string, quantity: number }
        const { id, size, quantity } = (await request.json()) as {
            id: number
            size: string
            quantity: number
        }

        const idx = Cart.findIndex(ci => ci.product.id === id && ci.size === size)
        if (idx === -1) {
            return NextResponse.json(
                { error: `Produkt ${id} w rozmiarze ${size} nie istnieje` },
                { status: 404 }
            )
        }

        if (quantity <= 0) {
            Cart.splice(idx, 1)
        } else {
            Cart[idx].quantity = quantity
        }

        return NextResponse.json(Cart)
    } catch {
        return NextResponse.json(
            { error: 'Nieprawidłowe dane w żądaniu PATCH' },
            { status: 400 }
        )
    }
}

export async function DELETE(request: Request) {
    try {
        // Oczekujemy body: { id: number, size: string, all?: boolean }
        const { id, size, all } = (await request.json()) as {
            id: number
            size: string
            all?: boolean
        }

        const idx = Cart.findIndex(ci => ci.product.id === id && ci.size === size)
        if (idx === -1) {
            return NextResponse.json(
                { error: `Produkt ${id} w rozmiarze ${size} nie istnieje` },
                { status: 404 }
            )
        }

        if (all) {
            // usuń całą pozycję
            Cart.splice(idx, 1)
        } else {
            // usuń jedną sztukę
            Cart[idx].quantity -= 1
            if (Cart[idx].quantity <= 0) {
                Cart.splice(idx, 1)
            }
        }

        return NextResponse.json(Cart)
    } catch {
        return NextResponse.json(
            { error: 'Nieprawidłowe dane w żądaniu DELETE' },
            { status: 400 }
        )
    }
}
