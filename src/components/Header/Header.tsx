import styles from './Header.module.scss';
import Image from "next/image";
import {HeaderMenu} from "@/components/HeaderMenu/HeaderMenu";
import {CartMobileButton} from "@/components/CartMobileButton/CartMobileButton";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                    <div className={styles.logoContainer}>
                        <Image
                            src="/logo2.png"
                            alt="logo"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                <HeaderMenu/>
                <CartMobileButton />
            </div>
        </header>
    );
};