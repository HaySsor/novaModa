import styles from './Modal.module.scss'
import {ReactNode} from "react";

type Props = {
    children: ReactNode,
    isOpen: boolean,
    showModal: () => void,
}

export const Modal = ({children, isOpen, showModal} : Props) =>{


    return (
        <div className={styles.modal}>
            {children}
        </div>
    )
}