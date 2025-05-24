import styles from './FilterBody.module.scss';
import {ChangeEvent, useState} from "react";
import {useSyncFilterToUrl} from "@/hooks/UseSyncFilterToUrl";
import {PRICE_RANGES} from "@/data/PriceRage";

export type FilterType = {
    size: string[],
    sale: boolean,
    priceRage: number[]
}


export const FilterBody = () => {
    const [useFilter, setUseFilter] = useState<FilterType>({
        size: [],
        sale: false,
        priceRage: []
    });

    useSyncFilterToUrl(useFilter)

    const sizes = ["xs", "sm", "md", "lg", "xl"];

    const handleSetFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setUseFilter((prev) => {
            return {
                ...prev,
                sale: e.target.checked
            }
        })
    }

    const handleSizeChange = (size: string) => {
        setUseFilter(prev => {
            let newSizes = [...prev.size]
            newSizes = newSizes.includes(size)
                ? newSizes.filter(s => s !== size)
                : [...newSizes, size]
            return {
                ...prev,
                size: newSizes
            }
        })
    }

    const handlePriceRange = (id: number) => {
        setUseFilter(prev => {
            let newPriceRange = [...prev.priceRage]
            newPriceRange = newPriceRange.includes(id)
                ? newPriceRange.filter(x => x !== id)
                : [...newPriceRange, id]
            return {
                ...prev,
                priceRage: newPriceRange,
            }
        })
    }
    return (
        <div className={styles.filterBodyWrapper}>
            <div className={styles.filterBox}>
                <span className={styles.filterTitle}>
                    Rozmiar
                </span>
                <div className={styles.filterSizeBox}>
                    {sizes.map(size => {
                        return (
                            <div
                                onClick={() => handleSizeChange(size)}
                                className={`${styles.sizeItem} ${useFilter.size.includes(size) ? styles.activeSizeItem : ''}`}
                                key={size}>
                                {size}
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className={styles.filterBox}>
                <span className={styles.filterTitle}>
                    Wyprzedaż
                </span>
                <div className={styles.filterSale}>
                    <label className={styles.filterCheck}>
                        <input type="checkbox" checked={useFilter.sale} onChange={handleSetFilter}/>
                        Wyprzedaż
                    </label>
                </div>
            </div>

            <div className={styles.filterBox}>
                <span className={styles.filterTitle}>
                    Cena
                </span>
                <div className={styles.filterPrice}>
                    {PRICE_RANGES.map(price => {
                        return (
                            <label key={price.id} className={styles.filterCheck}>
                                <input type="checkbox" value={price.id} checked={useFilter.priceRage.includes(price.id)}
                                       onChange={() => handlePriceRange(price.id)}/>
                                {price.label}
                            </label>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}