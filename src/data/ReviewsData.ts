export type ReviewsDataType = {
    id: number
    name: string
    text: string,
    age: number
    image: string,
    imageAlt: string,
}

export const ReviewsData: ReviewsDataType[] = [
    {
        id: 1,
        name: 'Anna',
        age: 28,
        image: '/reviews/woman1.png',
        imageAlt: 'ocena',
        text: "Zamówiłam koszulę z Nova Moda i zakochałam się od pierwszego założenia. Materiał jest niesamowicie miękki, a krój idealnie dopasowany. Widać, że każdy detal został przemyślany i dopracowany z sercem. Uwielbiam marki, które stawiają na jakość i autentyczność – i właśnie to znalazłam tutaj."
    },
    {
        id: 2,
        name: 'Kasia',
        age: 31,
        image: '/reviews/woman2.png',
        imageAlt: 'ocena',
        text: "To, że ubrania szyte są ręcznie i w Polsce, naprawdę czuć! Wszystko jest starannie wykonane, a styl idealnie trafia w moje gusta – prosto, klasycznie, ale z charakterem. Nova Moda to mój nowy ulubiony adres w sieci. Widać pasję w każdym projekcie."
    },
    {
        id: 3,
        name:"Tomek",
        age: 34,
        image: '/reviews/men1.png',
        imageAlt: 'ocena',
        text: "Zaskoczyła mnie jakość i szybkość dostawy. Koszula, którą zamówiłem, wygląda jak z butikowej półki, a przy tym jest bardzo wygodna. Lubię, kiedy marka nie tylko sprzedaje, ale też opowiada historię – Nova Moda to właśnie taki przykład.",
    }
]