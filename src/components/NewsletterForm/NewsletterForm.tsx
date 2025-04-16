'use client'
import styles from './NewsletterForm.module.scss'
import {ChangeEvent, FormEvent, useState} from "react";
import {Button} from "@/components/Button/Button";


export const NewsletterForm = () => {
    const [email, setEmail] = useState('')

    const handleEmailType =  (e : ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    }

    return (
        <form onSubmit={handleSubmit} className={styles.formWrapper}>
            <h3 className={styles.formTitle}>Zapisz się do Newsletter</h3>
            <label className={styles.formLabel}>
                Wpisz swój Email
                <input onChange={handleEmailType} value={email} className={styles.formInput} type="text" placeholder="Twój e-mail" />
            </label>
            <div className={styles.formButtonBox}>
                <Button onClick={()=>{}} isFull={true} text={'Zapisz się'}/>
            </div>
        </form>
    )
}