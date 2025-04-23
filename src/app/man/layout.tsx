import {Categories} from "@/components/Categories/Categories";
import {FiltersWrapper} from "@/components/FiltersWrapper/FiltersWrapper";


export default function BlogLayout({children,}: {
    children: React.ReactNode
}) {
    return <section>
        <Categories sex={'man'} />
        <FiltersWrapper />
        {children}
    </section>
}