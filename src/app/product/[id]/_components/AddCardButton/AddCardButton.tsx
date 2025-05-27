"use client"
import styles from "./AddCardButton.module.scss"
import {Button} from "@/components/Button/Button";
import {AnimatePresence, motion} from 'motion/react';
import {useContext, useState} from "react";
import { Check } from 'lucide-react';
import {CartContext} from "@/context/CartContext";
import {ElementType} from "@/Types/ClothesPage";

type Props = {
    product : ElementType,
    size: string,
    setIsErrorAction: (el : boolean)=> void,
}

export const AddCardButton = ({product, size, setIsErrorAction} :Props) =>{
    const [toast, setToast] = useState(false)
    const {addItem} = useContext(CartContext)

    const handleClick = async () => {
        if(!size){
            setIsErrorAction(true);
            return;
        }
        setToast(true)
        setTimeout(() => setToast(false), 1200)
       await addItem(product, size)
    }

    const btnVariants = {
        initial: { x: 0 },
        shifted: { x: '-100%' },
    }

    const toastVariants = {
        initial:  { x: '100%', opacity: 0 },
        visible:  { x: 0,   opacity: 1 },
        exit:     { x: '100%', opacity: 0 },
    }

    return(
            <div className={styles.wrapper}>
                <motion.div
                    variants={btnVariants}
                    initial="initial"
                    animate={toast ? 'shifted' : 'initial'}
                    transition={{
                        x: {
                            duration: 0.3,
                            ease: 'easeInOut',
                            delay: toast ? 0 : 0.2
                        }
                    }}>
                    <Button
                        onClick={handleClick}
                        isFull={true}
                        text="Dodaj do koszyka"
                        icon="plus"
                    />
                </motion.div>

                <AnimatePresence>
                    {toast && (
                        <motion.div
                            className={styles.toast}
                            variants={toastVariants}
                            initial="initial"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.4 }}
                        >
                            <Check />
                            Dodano
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
    )
}