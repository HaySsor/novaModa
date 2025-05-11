import {Categories} from "@/components/Categories/Categories";
import styles from "./layout.module.scss";
import {FiltersWrapper} from "@/components/FiltersWrapper/FiltersWrapper";

export default function BlogLayout({children,}: {
    children: React.ReactNode
}) {
    return <section>
        <Categories sex={'woman'} />
        <div className={styles.categoriesWrapper}>
            <FiltersWrapper />
            {children}
        </div>
    </section>
}