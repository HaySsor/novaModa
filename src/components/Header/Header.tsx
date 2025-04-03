import styles from './Header.module.scss';
import Image from "next/image";
import {HeaderMenu} from "@/components/HeaderMenu/HeaderMenu";

export const Header = () => {


    return (
        <header className={styles.header}>
            <Image src="/logo2.png"
                   alt={'logo'}
                   width={90}
                   height={40}/>
            <HeaderMenu/>
        </header>
    )
}