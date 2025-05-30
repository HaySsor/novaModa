"use client"
import styles from './Button.module.scss';
import {DynamicIcon} from "lucide-react/dynamic";
import {IconNameType} from "@/Types/IconType";


type Props = {
    onClick: () => void;
    isFull: boolean;
    isDisabled?: boolean;
    text: string;
    icon? : IconNameType;
    iconSize? : number,
    tooltipText? : string
}

export const Button = ({onClick, isFull, isDisabled, icon, text,iconSize}: Props) => {

    return (
            <button
                className={`
            ${styles.button} ${isDisabled ? styles.disabledButton : ''}
            ${isFull ? styles.fullButton : styles.borderButton}
            `}
                onClick={isDisabled ? ()=> {} : onClick}>
                { icon && <DynamicIcon name={icon} size={iconSize ? iconSize : 20}/>}
                {text}
            </button>
    )
}