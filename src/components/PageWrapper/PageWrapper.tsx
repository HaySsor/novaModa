import styles from './PageWrapper.module.scss';
import {ClothesPage} from "@/Types/ClothesPage";
import {Categories} from "@/components/Categories/Categories";

type Props = {
    data: ClothesPage,
    sex: string,
}

export const PageWrapper = ({data, sex}: Props) => {

    return (
        <div className={styles.pageWrapper}>

        </div>
    )
}