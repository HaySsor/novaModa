// src/app/api/men/[id]/route.ts
import { NextResponse } from 'next/server'
import rawData from '@/data/MenClothes.json'
import type { ClothesPage } from '@/Types/ClothesPage'

const dataJson = rawData as unknown as ClothesPage

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const { id } = params
    const category = dataJson[id]

    if (!category) {
        // zwracamy pierwszy argument jako null, a status 404
        return new Response(null, { status: 404 })
    }

    return NextResponse.json(category)
}
