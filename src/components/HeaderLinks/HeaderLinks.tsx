'use client'
import styles from './HeaderLinks.module.scss';
import {motion} from "motion/react"
import {openMenu} from "@/components/HeaderLinks/animation";
import {navigationLinks} from "@/data/Links"
import {HeaderLink} from "@/components/HeaderLink/HeaderLink";

type Props = {
    isOpen: boolean;
}

export const HeaderLinks = ({isOpen}: Props) => {

    return (
        <motion.div
            variants={openMenu}
            initial='close'
            animate={isOpen ? 'open' : 'close'}
            className={styles.headerLinksWrapper}>
            <div className={styles.headerLinksBox}>
                {navigationLinks.links.map(link => {
                    return (
                        <HeaderLink key={link.id} link={link}/>
                    )
                })}
            </div>
        </motion.div>
    )
}