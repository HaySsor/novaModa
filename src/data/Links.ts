
export type Subcategory = {
    name: string;
    id: number;
}

export type Category = {
    name: string;
    id: number;
    path: string,
    icon: any;
    subcategories: Subcategory[];
}

export const navigationLinks: { links: Category[] } = {
    links: [
        {
            name: 'Damskie',
            id: 1,
            icon: 'flower',
            path: '/woman',
            subcategories: [
                { name: 'Bluzy', id: 1 },
                { name: 'Sukienki', id: 2 },
                { name: 'Spódnice', id: 3 },
                { name: 'Topy', id: 4 },
                { name: 'Buty', id: 5 },
                { name: 'Akcesoria', id: 6 },
                { name: 'Płaszcze', id: 7 },
                { name: 'Jeansy', id: 8 },
            ],
        },
        {
            name: 'Męskie',
            id: 2,
            icon: 'biceps-flexed',
            path: '/men',
            subcategories: [
                { name: 'Koszule', id: 9 },
                { name: 'Spodnie', id: 10 },
                { name: 'Kurtki', id: 11 },
                { name: 'T-shirty', id: 12 },
                { name: 'Buty', id: 13 },
                { name: 'Akcesoria', id: 14 },
                { name: 'Swetry', id: 15 },
                { name: 'Bielizna', id: 16 },
            ],
        },
    ],
};
