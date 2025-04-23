export type ElementType = {
    sex: string
    name: string
    price: number
    isFavourite: boolean
    mainImage: string
    mainImageAlc: string
    description: string
    images: { src: string; alc: string }[]
}

export type ClothesPage = Record<string, ElementType[]>