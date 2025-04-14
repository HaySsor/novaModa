import styles from './home.module.scss'
import {HeroWrapper} from "@/app/components/HeroWrapper/HeroWrapper";

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <HeroWrapper />
    </div>
  );
}
