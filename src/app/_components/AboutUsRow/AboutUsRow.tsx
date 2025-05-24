import styles from './AboutUsRow.module.scss';
import Image from "next/image";
import {AboutUsSectionsType} from "@/app/_components/AboutUsWrapper/AboutUsWrapper";
import {DynamicIcon} from "lucide-react/dynamic";

type Props = {
    section: AboutUsSectionsType;
}

export const AboutUsRow = ({section}: Props) => {

    return (
        <div className={styles.aboutUsRow}>
            <div className={styles.aboutUsRowLeft}>
                <div className={styles.aboutUsRowLeftText}>
                    <h3>
                        <DynamicIcon name={section.icon} size={22}/>
                        {section.title}
                    </h3>
                    <p>{section.text}</p>
                </div>

            </div>
            <div className={styles.aboutUsRowRight}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={section.img}
                        alt={section.imgAlt}
                        fill
                        className={styles.image}
                    />
                </div>
            </div>
        </div>
    )
}