'use client'
import styles from "./FiltersWrapper.module.scss"
import {FiltersMobile} from "@/components/FiltersMobile/FiltersMobile";
import {FiltersDesktop} from "@/components/FiltersDesktop/FiltersDesktop";
import {useIsMobile} from "@/hooks/useIsMobile";


export const FiltersWrapper = () => {
    const isMobile = useIsMobile();

    return (
        <div className={styles.filtersWrapper}>
            {isMobile ? <FiltersMobile /> : <FiltersDesktop /> }
        </div>
    )
}