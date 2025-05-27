// app/api/product/[id]/route.ts
import { NextResponse } from 'next/server'
import menData   from '@/data/MenClothes.json'
import womanData from '@/data/WomanClothes.json'
import type { ClothesPage, ElementType } from '@/Types/ClothesPage'

const MEN_DATA   = menData   as unknown as ClothesPage
const WOMAN_DATA = womanData as unknown as ClothesPage

export async function GET(_: Request, context:any ) {
    const id = Number(context.params.id)

    // spłaszcz wszystkie kategorie mężczyzn i kobiet
    const allMen   = Object.values(MEN_DATA).flat()
    const allWomen = Object.values(WOMAN_DATA).flat()
    const all = [...allMen, ...allWomen] as ElementType[]

    // znajdź produkt o konkretnym id
    const product = all.find(p => p.id === id)
    if (!product) {
        return new Response(null, { status: 404 })
    }

    return NextResponse.json(product)
}
