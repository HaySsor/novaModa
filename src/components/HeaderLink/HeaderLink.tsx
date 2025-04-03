import styles from './HeaderLink.module.scss'
import { Category } from "@/data/Links";
import { DynamicIcon } from 'lucide-react/dynamic';
import Link from "next/link";

type Props = {
    link: Category
}

export const HeaderLink = ({ link }: Props) => {

    return (
        <div className={styles.linkBox}>
            <div className={styles.linkBoxTop}>
                <DynamicIcon name={link.icon} size={20} color={'#C7B299'} />
                <span>{link.name}</span>
            </div>
            <div className={`${styles.linkBoxBottom}`}>
                    {link.subcategories.map(category => (
                        <Link href={`${link.path}/${category.id}`} className={styles.subLinkItem} key={category.id}>
                            {category.name}
                        </Link>
                    ))}
            </div>
        </div>
    );
}
