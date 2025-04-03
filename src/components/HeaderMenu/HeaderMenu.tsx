'use client'
import styles from './HeaderMenu.module.scss'
import { motion } from "motion/react"
import {useState} from "react";
import {firstBar, secondBar, thirdBar} from "@/components/HeaderMenu/animations";
import {HeaderLinks} from "@/components/HeaderLinks/HeaderLinks";

export const HeaderMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsOpen((v) => !v);
    }

    return (
        <div className={styles.headerMenuWrapper}>
            <div onClick={handleOpenMenu} className={styles.headerMenuBars}>
                <motion.div
                    variants={firstBar}
                    initial='close'
                    animate={isOpen ? 'open' : 'close'}
                    className={styles.headerMenuBarsItem}></motion.div>
                <motion.div
                    variants={secondBar}
                    initial='close'
                    animate={isOpen ? 'open' : 'close'}
                    className={styles.headerMenuBarsItem}></motion.div>
                <motion.div
                    variants={thirdBar}
                    initial='close'
                    animate={isOpen ? 'open' : 'close'}
                    className={styles.headerMenuBarsItem}></motion.div>
            </div>
            <HeaderLinks isOpen={isOpen}/>
        </div>
    )
}