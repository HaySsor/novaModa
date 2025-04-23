
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
                { name: 'Koszule', id: 1 },
                { name: 'Spodnie', id: 2 },
                { name: 'Kurtki', id: 3 },
                { name: 'T-shirty', id: 4 },
                { name: 'Buty', id: 5 },
                { name: 'Akcesoria', id: 6 },
                { name: 'Swetry', id: 7 },
                { name: 'Bielizna', id: 8 },
            ],
        },
        {
            name: 'Męskie',
            id: 2,
            icon: 'biceps-flexed',
            path: '/man',
            subcategories: [
                { name: 'Koszule', id: 1 },
                { name: 'Spodnie', id: 2 },
                { name: 'Kurtki', id: 3 },
                { name: 'T-shirty', id: 4 },
                { name: 'Buty', id: 5 },
                { name: 'Akcesoria', id: 6 },
                { name: 'Swetry', id: 7 },
                { name: 'Bielizna', id: 8 },
            ],
        },
    ],
};
