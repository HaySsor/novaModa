'use client'
import styles from './ProductImagesCarousel.module.scss'
import {useRef, useState} from "react";

type Props = {
    images : {
        src: string,
        alt: string,
    }[]
}

export const ProductImagesCarousel = ({images}: Props) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [active, setActive] = useState(0)

    const onScroll = () => {
        if (!containerRef.current) return
        const { scrollLeft, offsetWidth } = containerRef.current
        const idx = Math.round(scrollLeft / offsetWidth)
        setActive(idx)
    }

    return (
        <div className={styles.carouselBox}>
            <div
                className={styles.imagesBox}
                ref={containerRef}
                onScroll={onScroll}
            >
                {images.map((image, i) => (
                    <img
                        key={i}
                        className={styles.image}
                        src={image.src}
                        alt={image.alt}
                    />
                ))}
            </div>

            <div className={styles.dotsBox}>
                {images.map((_, i) => (
                    <span
                        key={i}
                        className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                    />
                ))}
            </div>
        </div>
    )
}