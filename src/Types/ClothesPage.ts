export type ElementType = {
    id: number,
    name: string,
    price: number,
    categorySex : number,
    categoryClothes: number,
    sale: boolean,
    sex: 'men' | 'woman',
    mainImage: string,
    mainImageAlt: string,
    images: {src : string, alt: string}[],
    availableSize: string[],
    description : string,
    isFavourite: boolean,
}

export type ClothesPage = Record<string, ElementType[]>