import styles from './AboutUsWrapper.module.scss'
import {AboutUsRow} from "@/app/_components/AboutUsRow/AboutUsRow";

export type  AboutUsSectionsType = {
    title: string,
    icon: any,
    text: string,
    img: string,
    imgAlt: string,
}

export const AboutUsWrapper = () => {

    const AboutUsSections :AboutUsSectionsType[] = [
        {
            title: 'Ręczne szycie z sercem',
            icon: 'scissors',
            text: `W Nova Moda wierzymy, że moda powinna być osobista, autentyczna i wyjątkowa — dlatego wszystkie nasze ubrania szyjemy samodzielnie, bez pośpiechu i kompromisów. Każdy projekt przechodzi przez nasze ręce, od pierwszego szkicu po ostatni szew. Dzięki temu mamy pewność, że dostajesz produkt dopracowany w najdrobniejszych detalach. Ręczna produkcja to nie tylko wybór, to nasza filozofia — bo tylko tak powstaje odzież, która ma duszę i trwałość na lata.`,
            img: '/about-us/madeHand.png',
            imgAlt: 'Nasta Moda',
        },
        {
            title: '100% zrobione w Polsce',
            icon: 'heart',
            text: `Nasze kolekcje powstają w 100% z materiałów pochodzących z polskich fabryk i lokalnych dostawców. Wybieramy tkaniny od sprawdzonych producentów, którzy podzielają nasze wartości — wysoką jakość, etyczne podejście i szacunek do środowiska. Szyjąc lokalnie, wspieramy polski rynek i skracamy łańcuch dostaw, zmniejszając wpływ na planetę. To świadomy wybór, który przekłada się nie tylko na lepszy produkt, ale też na większe zaufanie między nami a klientem.`,
            img: '/about-us/made.png',
            imgAlt: 'Nasta Moda',
        },
        {
            title: 'Styl z pasją i przemyślaną prostotą',
            icon: 'pencil-ruler',
            text: `Tworzenie stylizacji to dla nas coś więcej niż tylko dobór krojów i kolorów. To sztuka wyrażania siebie przez rzeczy, które są spójne, wygodne i ponadczasowe. W każdej kolekcji stawiamy na minimalizm, harmonię formy i dbałość o detal. Naszym celem jest moda, która nie dominuje, ale podkreśla — subtelna, ale zauważalna. Projektujemy z pasją i przekonaniem, że mniej znaczy więcej, a jakość i konsekwencja tworzą prawdziwy styl.`,
            img: '/about-us/sketch.png',
            imgAlt: 'Nasta Moda',
        }
    ]

    return (
        <div className={styles.aboutUsWrapper}>
            <h2 className={`sectionTitle`}> Poznaj nas </h2>

            <div className={styles.aboutUsContainer}>
                {AboutUsSections.map(el => {
                    return <AboutUsRow key={el.title} section={el} />
                })}

            </div>
        </div>
    )
}