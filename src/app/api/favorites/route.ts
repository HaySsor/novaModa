import {NextResponse} from "next/server";
import type {ElementType} from "@/Types/ClothesPage";


const favorites: ElementType[] = []

export async function GET() {
        return NextResponse.json(favorites)
}

export async function POST(request: Request) {
    try {
        const {product} = (await request.json()) as { product: ElementType }
        favorites.push(product)
        return NextResponse.json(favorites, {status: 201})
    } catch {
        return NextResponse.json({error: 'Nieprawidłowe dane w żądaniu POST'}, {status: 400})
    }
}

export async function DELETE(request: Request) {
    try {
        const {id} = (await request.json()) as { id: number }
        const idx = favorites.findIndex(el => el.id === id)
        favorites.splice(idx, 1)
        return NextResponse.json(favorites)
    } catch {
        return NextResponse.json({error: 'Nieprawidłowe dane w żądaniu DELETE'}, {status: 400})
    }
}