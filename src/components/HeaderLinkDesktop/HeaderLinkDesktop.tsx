'use client'
import styles from './HeaderLinkDesktop.module.scss'
import {Category} from "@/data/Links";
import {DynamicIcon} from "lucide-react/dynamic";
import Link from "next/link";

type Props = {
    link: Category
}

export const HeaderLinkDesktop = ({link}: Props) => {

    return(
        <div className={styles.headerLinkWrapper}>
            <Link href={link.path} className={styles.linkBoxTopDesktop}>
                <DynamicIcon name={link.icon} size={20} color={'#C7B299'} />
                <span>{link.name}</span>
            </Link>
            <div className={styles.subLinksDesktopWrapper}>
                <div className={styles.subLinksDesktopBox}>
                    {link.subcategories.map(category => (
                        <Link href={`${link.path}/${category.id}`} className={styles.subLinkItem} key={category.id}>
                            {category.name}
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    )
}