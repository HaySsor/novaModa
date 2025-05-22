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
        id : 6,
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
        id : 15,
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
        sex: "woman",
        name: "Szpilki Klasyczne",
        price: 299.99,
        isFavourite: false,
        mainImage: "/clothes/women/shoes/1/image1.png",
        mainImageAlt: "Klasyczne szpilki",
        description: "Eleganckie szpilki o ponadczasowym kroju.",
        images: [
            { "src": "/clothes/women/shoes/1/image1.png", "alt": "Z przodu" },
            { "src": "/clothes/women/shoes/1/image2.png", "alt": "Z boku" }
        ],
        id: 37,
        categorySex: 1,
        categoryClothes: 5,
        sale: false,
        availableSize: ["36", "37", "38", "39"]
    },


]