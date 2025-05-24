import styles from './ReviewItem.module.scss'
import {ReviewsDataType} from "@/data/ReviewsData";
import Image from "next/image";
import { Star } from "lucide-react";

type Props = {
    review : ReviewsDataType
}

export const ReviewItem = ({ review }: Props) => {

    return (
        <div className={styles.reviewItemWrapper}>
            <div className={styles.reviewItemTop}>
                <div className={styles.reviewItemTopLeft}>
                    <Image src={review.image} width={60} height={60}  alt={review.imageAlt} />
                </div>
                <div className={styles.reviewItemTopRight}>
                    <div className={styles.reviewItemName}>
                        <span className={styles.name}>{review.name},</span>
                        <span className={styles.age}>{review.age} lat</span>
                    </div>
                    <div className={styles.starBox}>
                        <Star fill="#FFBB00" strokeWidth={0} size={15} />
                        <Star fill="#FFBB00" strokeWidth={0} size={15}/>
                        <Star fill="#FFBB00" strokeWidth={0} size={15}/>
                        <Star fill="#FFBB00" strokeWidth={0} size={15}/>
                        <Star fill="#FFBB00" strokeWidth={0} size={15}/>
                    </div>
                </div>
            </div>
            <div className={styles.reviewItemBottom}>
                <p>&quot;{review.text}&quot;</p>
            </div>
        </div>
    )
}