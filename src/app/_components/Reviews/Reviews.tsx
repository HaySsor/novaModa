'use client'
import styles from './Reviews.module.scss'
import {useEffect, useState} from "react";
import {ReviewsData, ReviewsDataType} from "@/data/ReviewsData";
import {ReviewItem} from "@/app/_components/ReviewItem/ReviewItem";

export const Reviews = () => {
    const [reviews, setReviews] = useState<ReviewsDataType[]>([])

    useEffect(() => {
        setReviews(ReviewsData)

        return () =>{
            setReviews([])
        }
    }, [])


    return (
        <div className={styles.reviewsWrapper}>
            <h2 className={`sectionTitle`}> Opinie klientów </h2>

            <div className={styles.reviewsContainer}>
                {reviews.map((review, index) => (
                    <ReviewItem key={index} review={review} />
                ))}
            </div>
        </div>
    )
}