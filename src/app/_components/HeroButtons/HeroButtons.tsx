'use client'
import styles from './HeroButtons.module.scss'
import {Button} from "@/components/Button/Button";

export const HeroButton = ({}) => {

    const handleMeetUsButton = () =>{

    }

    return(
        <div className={styles.heroButtonBox}>
            <Button isFull={true} text={'Nasza Oferta'} onClick={handleMeetUsButton} icon={'gem'} />
        </div>
    )
}