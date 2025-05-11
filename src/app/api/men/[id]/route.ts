import { NextResponse } from 'next/server'
import rawData from '@/data/MenClothes.json'
import type { ClothesPage } from '@/Types/ClothesPage'

const dataJson = rawData as unknown as ClothesPage

interface Params {
    params: { id: string }
}

export async function GET(_: Request, { params }: Params) {
    const category = dataJson[params.id]
    if (!category) {
        return new Response(null, { status: 404 })
    }
    return NextResponse.json(category)
}