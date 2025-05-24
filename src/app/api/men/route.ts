import { NextResponse } from 'next/server'
import dataJson from '@/data/MenClothes.json'

export async function GET() {
    const all = Object.values(dataJson).flat()
    return NextResponse.json(all)
}
