import {ElementType} from "@/Types/ClothesPage";

export const BestsellersData : ElementType[] = [
    {
        id : 1,
        categorySex: 2,
        categoryClothes : 1,
        name : 'Koszula Męska Nova',
        sex : 'man',
        price: 120.99,
        sale: false,
        isFavourite: false,
        mainImage: '/clothes/shirt1.png',
        mainImageAlt: "tu",
        availableSize : ['s','m','l','xl'],
        description: "testowy opis testowy opis testowy opis testowy opis testowy opis testowy opis testowy opis testowy opis",
        images:[
            {src: '/clothes/shirt1.png', alt: 'tu'}
        ]
    },
    {
        id : 2,
        categorySex: 2,
        categoryClothes : 1,
        name : 'Spodnie Męskie Nova',
        isFavourite : false,
        sex : 'man',
        price: 180,
        sale: false,
        mainImage: '/clothes/pants.png',
        availableSize : ['s','m','l','xl'],
        mainImageAlt: "tu",
        description: "testowy opis testowy opis testowy opis testowy opis testowy opis testowy opis testowy opis testowy opis",
        images:[
            {src: '/clothes/pants.png', alt: 'tu' }
        ]
    },
    {
        id : 3,
        categorySex: 2,
        categoryClothes : 3,
        name : 'Trampki Męskie Nova',
        sex : 'man',
        price: 220,
        sale: false,
        isFavourite: false,
        mainImage: '/clothes/shoes.png',
        availableSize : ['40','41','42','43','44'],
        mainImageAlt: "tu",
        description: "testowy opis testowy opis testowy opis testowy opis testowy opis testowy opis testowy opis testowy opis",
        images:[
            {src: '/clothes/shoes.png', alt: 'tu' }
        ]
    },

    {
        id : 4,
        categorySex: 1,
        categoryClothes : 3,
        name : 'Trampki Damsie Nova',
        sex : 'woman',
        price: 220,
        sale: false,
        isFavourite: false,
        mainImage: '/clothes/shoes.png',
        availableSize : ['40','41','42','43','44'],
        mainImageAlt: "tu",
        description: "testowy opis testowy opis testowy opis testowy opis testowy opis testowy opis testowy opis testowy opis",
        images:[
            {src: '/clothes/shoes.png', alt: 'tu' }
        ]
    },


]