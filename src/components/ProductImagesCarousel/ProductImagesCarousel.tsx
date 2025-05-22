'use client'
import styles from './ProductImagesCarousel.module.scss'
import {useRef, useState} from "react";
import {useIsMobile} from "@/hooks/useIsMobile";

type Props = {
    images: {
        src: string,
        alt: string,
    }[]
}

export const ProductImagesCarousel = ({images}: Props) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [active, setActive] = useState(0)
    const [desktopSelectImage, setDesktopSelectImage] = useState(images[0])
    const isMobile = useIsMobile()

    const onScroll = () => {
        if (!containerRef.current) return
        const {scrollLeft, offsetWidth} = containerRef.current
        const idx = Math.round(scrollLeft / offsetWidth)
        setActive(idx)
    }

    return (
        isMobile
            ? <div className={styles.carouselBox}>
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
            : <div className={styles.desktopCarouselBox}>
                <div className={styles.desktopImageBox}>
                    { images.length > 1 &&
                        <div className={styles.sideImages}>
                            {images.map((image, i) => (
                                <img
                                    key={i}
                                    onMouseEnter={() => setDesktopSelectImage(image)}
                                    className={styles.desktopSideImage}
                                    src={image.src}
                                    alt={image.alt}
                                />
                            ))}
                        </div>
                    }
                    <div className={`${styles.mainImages} ${images.length < 2 ? styles.mainImagesOne  : ''}`}>
                        <img
                            className={styles.desktopMainImage}
                            src={desktopSelectImage.src}
                            alt={desktopSelectImage.alt}
                        />
                    </div>
                </div>
            </div>
    )
}