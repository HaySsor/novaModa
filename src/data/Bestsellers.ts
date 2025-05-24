import {ElementType} from "@/Types/ClothesPage";

export const BestsellersData : ElementType[] = [
    {
        id : 1,
        categorySex: 2,
        categoryClothes : 1,
        name : 'Koszula Męska Nova',
        sex : 'men',
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
        sex: "men",
        name: "Czapka Beanie Nova",
        price: 79.00,
        isFavourite: false,
        mainImage:  "/clothes/men/accessories/3/image1.png",
        mainImageAlt: "Czapka męska",
        description: "Miękka dzianinowa czapka w kolorze piaskowym.",
        images: [
            { "src": "/clothes/men/accessories/3/image1.png", "alt": "Z przodu" }
        ],
        id : 18,
        categorySex: 2,
        categoryClothes : 6,
        sale: false,
        availableSize : ["s","m","l","xl"]
    },
    {
        id : 15,
        categorySex: 2,
        categoryClothes : 3,
        name : 'Trampki Męskie Nova',
        sex : 'men',
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
        name: "Sukienka Letnia Kwiatowa",
        price: 169.99,
        isFavourite: false,
        mainImage: "/clothes/women/dress/1/image1.png",
        mainImageAlt: "Letnia sukienka w kwiatowy wzór",
        description: "Lekka, zwiewna sukienka uszyta z bawełnianej tkaniny z motywem drobnych kwiatów.",
        images: [
            { "src": "/clothes/women/dress/1/image1.png", "alt": "Widok z przodu" },
            { "src": "/clothes/women/dress/1/image2.png", "alt": "Widok z tyłu" }
        ],
        id: 25,
        categorySex: 1,
        categoryClothes: 1,
        sale: false,
        availableSize: ["s", "m", "l", "xl"]
    }


]