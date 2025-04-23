'use client'
import styles from './HeaderMenu.module.scss'
import { motion } from "motion/react"
import {useEffect, useState} from "react";
import {firstBar, secondBar, thirdBar} from "@/components/HeaderMenu/animations";
import {HeaderLinks} from "@/components/HeaderLinks/HeaderLinks";
import {navigationLinks} from "@/data/Links"
import {HeaderLinkDesktop} from "@/components/HeaderLinkDesktop/HeaderLinkDesktop";
import {useIsMobile} from "@/hooks/useIsMobile";

export const HeaderMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useIsMobile()

    useEffect(() => {
        if(isOpen){
            document.body.classList.add('no-scroll');
        }else{
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);

    const handleOpenMenu = () => {
        setIsOpen((v) => !v);
    }

    return (
        isMobile ? (
            <div className={styles.headerMenuWrapper}>
                <div onClick={handleOpenMenu} className={styles.headerMenuBars}>
                    <motion.div
                        variants={firstBar}
                        initial='close'
                        animate={isOpen ? 'open' : 'close'}
                        className={styles.headerMenuBarsItem}
                    />
                    <motion.div
                        variants={secondBar}
                        initial='close'
                        animate={isOpen ? 'open' : 'close'}
                        className={styles.headerMenuBarsItem}
                    />
                    <motion.div
                        variants={thirdBar}
                        initial='close'
                        animate={isOpen ? 'open' : 'close'}
                        className={styles.headerMenuBarsItem}
                    />
                </div>
                <HeaderLinks isOpen={isOpen} handleOpenMenu={handleOpenMenu} navigationLinks={navigationLinks.links} />
            </div>
        ) : (
            <div className={styles.headerMenuWrapperDesktop}>
                {navigationLinks.links.map(link => {
                    return (
                        <HeaderLinkDesktop key={link.id} link={link} />
                    )
                })}
            </div>
        )
    );
}