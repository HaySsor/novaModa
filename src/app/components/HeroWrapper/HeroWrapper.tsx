import styles from './HeroWrapper.module.scss'
import Image from "next/image";

export const HeroWrapper = ({}) => {


    return (
        <div className={styles.heroWrapper}>

            <div className={styles.heroMobileImgeBox}>
                <Image
                    src="/logo2.png"
                    alt='HeroImage'
                    fill
                    className={styles.heroMobileImage}
                />
            </div>

            <div className={`${styles.heroTextBox}`}>
                <h1>Nova Moda</h1>
                <h3>Nova Moda to moda z duszą — każdy projekt powstaje z pasji, precyzji i szacunku do
                    rzemiosła</h3>
                <p>Szyjemy ręcznie, z dbałością o najmniejszy detal, bo wierzymy, że prawdziwe piękno kryje się w
                    jakości, a styl zaczyna się od serca.</p>

                <div className={styles.heroButtonBox}>
                    
                </div>
            </div>

            <div className={styles.heroDesktopImagesGrid}>
                <Image
                    className={styles.heroDesktopImage}
                    src='/hero-image.png'
                    alt='Koszul Nova Moda'
                    width={280}
                    height={510}
                />
                <Image
                    className={styles.heroDesktopImage}
                    src='/hero.png'
                    alt='HeroImage'
                    width={280}
                    height={250}
                />
                <Image
                    className={styles.heroDesktopImage}
                    src='/clothes/shoes.png'
                    alt='HeroImage'
                    width={280}
                    height={250}
                />
                <Image
                    className={styles.heroDesktopImage}
                    src='/hero-image2.png'
                    alt='Spodnie Nova Moda'
                    width={280}
                    height={510}
                />
            </div>
        </div>
    )
}