import styles from './Footer.module.scss';
import {NewsletterForm} from "@/components/NewsletterForm/NewsletterForm";
import Image from "next/image";
import { Info } from 'lucide-react';

export const Footer = () => {

    return (
        <div className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerForm}>
                    <NewsletterForm />
                </div>
                <div className={styles.footerLinks}>
                    <h3>
                        <Info />
                        Informacje
                    </h3>

                    <span>Reklamacje</span>
                    <span>Kontakt</span>
                    <span>O nas</span>
                    <span>Koszyk</span>
                    <span>Polubione</span>

                </div>
                <div className={styles.footerAddress}>
                    <div className={styles.companyInfo}>
                        <div className={styles.logoBox}>
                            <Image src={'/logo2.png'} width={50} height={35} alt={'logo'} />
                        </div>
                        <h3 className={styles.companyTitle}>
                            Nova Moda
                        </h3>
                    </div>
                    <h3>Adres:</h3>
                    <span>
                        ul. Zwycięstwa 6
                    </span>
                    <span>
                        61-644 Poznań
                    </span>
                </div>
            </div>
        </div>
    )
}