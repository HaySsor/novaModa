import { NextResponse } from 'next/server'
import dataJson from '@/data/MenClothes.json'

export async function GET() {
    return NextResponse.json(dataJson)
}
