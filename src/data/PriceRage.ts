
export interface PriceRange {
    id: number;
    label: string;
    min: number;
    max?: number;
}

export const PRICE_RANGES: PriceRange[] = [
    { id: 1, label: '10 – 99 zł',   min: 10,  max: 99  },
    { id: 2, label: '100 – 200 zł', min: 100, max: 200 },
    { id: 3, label: '200 – 300 zł', min: 200, max: 300 },
    { id: 4, label: '400 – 500 zł', min: 400, max: 500 },
    { id: 5, label: '500+ zł',      min: 500           },
]