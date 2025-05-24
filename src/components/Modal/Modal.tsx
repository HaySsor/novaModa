import styles from './Modal.module.scss'
import {ReactNode} from "react";
import {modalOverlay, openModal} from "@/components/Modal/animation";
import {motion, AnimatePresence} from "motion/react"
import {DynamicIcon} from "lucide-react/dynamic";
import { X } from 'lucide-react';
import {IconNameType} from "@/Types/IconType";

type Props = {
    children: ReactNode,
    isOpen: boolean,
    showModal: () => void,
    title: string,
    icon: IconNameType
}

export const Modal = ({children, isOpen, showModal, title, icon}: Props) => {

    const handleOverlayClick = () => {
        showModal()
    }

    return (
        <AnimatePresence mode="wait">
            {isOpen && <div className={styles.modalWrapper}>
                <motion.div
                    variants={modalOverlay}
                    initial='close'
                    animate={isOpen ? 'open' : 'close'}
                    onClick={handleOverlayClick}
                    className={styles.overlay}></motion.div>
                <motion.div
                    variants={openModal}
                    initial='close'
                    data-modal
                    animate={isOpen ? 'open' : 'close'}
                    exit='close'
                    className={styles.modal}>
                    <div className={styles.modalTop}>
                        <div className={styles.modalTopLeft}>
                            <DynamicIcon name={icon} size={20}/>
                            <span>{title}</span>
                        </div>
                        <div onClick={handleOverlayClick} className={styles.modalTopRight}>
                            <X size={24}/>
                        </div>
                    </div>
                    <div className={styles.modalMain}>
                        {children}
                    </div>
                </motion.div>
            </div>}
        </AnimatePresence>
    )
}

