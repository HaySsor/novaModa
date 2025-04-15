import styles from './home.module.scss'
import {HeroWrapper} from "@/app/components/HeroWrapper/HeroWrapper";
import {AboutUsWrapper} from "@/app/components/AboutUsWrapper/AboutUsWrapper";
import {BestSellers} from "@/app/components/BestSellers/BestSellers";

export default function Home() {
    return (
        <div className={styles.homeWrapper}>
            <HeroWrapper/>
            <AboutUsWrapper/>
            <BestSellers />
        </div>
    );
}
