import styles from './home.module.scss'
import {HeroWrapper} from "@/app/_components/HeroWrapper/HeroWrapper";
import {AboutUsWrapper} from "@/app/_components/AboutUsWrapper/AboutUsWrapper";
import {BestSellers} from "@/app/_components/BestSellers/BestSellers";
import {Reviews} from "@/app/_components/Reviews/Reviews";


export default function Home() {
    return (
        <div className={styles.homeWrapper}>
            <HeroWrapper/>
            <AboutUsWrapper/>
            <BestSellers />
            <Reviews />
        </div>
    );
}
