import {Categories} from "@/components/Categories/Categories";
import {FiltersWrapper} from "@/components/FiltersWrapper/FiltersWrapper";
import styles from "./layout.module.scss";

export default function BlogLayout({children,}: {
    children: React.ReactNode
}) {
    return <section>
        <Categories sex={'men'} />
        <div className={styles.categoriesWrapper}>
            <FiltersWrapper />
            {children}
        </div>
    </section>
}