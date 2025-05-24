import { NextResponse } from 'next/server'
import rawData from '@/data/MenClothes.json'
import type { ClothesPage } from '@/Types/ClothesPage'

const dataJson = rawData as unknown as ClothesPage

export async function GET(request: Request, context:any ) {
    const { id } = context.params
    const category = dataJson[id]

    if (!category) {
        return new Response(null, { status: 404 })
    }
    return NextResponse.json(category)
}