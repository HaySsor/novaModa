import styles from './FiltersMobile.module.scss'
import {Button} from "@/components/Button/Button";
import {useEffect, useState} from "react";
import {Modal} from "@/components/Modal/Moda";
import {FilterBody} from "@/components/FilterBody/FilterBody";

export const FiltersMobile = () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if(isOpen){
            document.body.classList.add('no-scroll');
        }else{
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);

    const handleOpen = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <div className={styles.filterMobile}>
            <span className={styles.filterTitle}>Filtry</span>

            <Button onClick={handleOpen} isFull={false} text={'Filtr'} icon={'settings-2'} iconSize={18} />

            <Modal title={'Filtry'} icon={'settings-2'} isOpen={isOpen} showModal={handleOpen}>
                <FilterBody />
            </Modal>
        </div>
    )
}