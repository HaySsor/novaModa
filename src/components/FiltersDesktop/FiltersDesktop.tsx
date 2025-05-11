import styles from './FiltersDesktop.module.scss'
import {FilterBody} from "@/components/FilterBody/FilterBody";

export const FiltersDesktop = () => {

    return (
        <div className={styles.filterWrapper}>
            <FilterBody />
        </div>
    )
}