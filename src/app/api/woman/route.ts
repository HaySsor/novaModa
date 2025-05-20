import { NextResponse } from 'next/server'
import dataJson from '@/data/WomanClothes.json'

export async function GET() {
    const all = Object.values(dataJson).flat()
    return NextResponse.json(all)
}
