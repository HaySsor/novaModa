'use client'
import styles from './Header.module.scss';
import Image from "next/image";
import {HeaderMenu} from "@/components/HeaderMenu/HeaderMenu";
import {CartFavButton} from "@/components/CartFavButton/CartFavButton";
import Link from "next/link";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <Link href={'/'} className={styles.logoContainer}>
                    <Image
                        src="/logo2.png"
                        alt="logo"
                        fill
                        style={{objectFit: 'contain'}}
                    />
                </Link>
                <HeaderMenu/>
                <CartFavButton/>
            </div>
        </header>
    );
};