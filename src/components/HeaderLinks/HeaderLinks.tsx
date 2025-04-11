'use client'
import styles from './HeaderLinks.module.scss';
import {motion} from "motion/react"
import {openMenu} from "@/components/HeaderLinks/animation";

import {HeaderLink} from "@/components/HeaderLink/HeaderLink";
import {Category} from "@/data/Links";

type Props = {
    isOpen: boolean;
    navigationLinks: Category[]
}

export const HeaderLinks = ({isOpen, navigationLinks}: Props) => {

    return (
        <motion.div
            variants={openMenu}
            initial='close'
            animate={isOpen ? 'open' : 'close'}
            className={styles.headerLinksWrapper}>
            <div className={styles.headerLinksBox}>
                {navigationLinks.map(link => {
                    return (
                        <HeaderLink key={link.id} link={link}/>
                    )
                })}
            </div>
        </motion.div>
    )
}