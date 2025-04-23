import styles from './HeaderLink.module.scss'
import { Category } from "@/data/Links";
import { DynamicIcon } from 'lucide-react/dynamic';
import Link from "next/link";

type Props = {
    link: Category,
    handleOpenMenu: () => void,
}

export const HeaderLink = ({ link, handleOpenMenu }: Props) => {

    return (
        <div className={styles.linkBox}>
            <Link onClick={handleOpenMenu} href={link.path} className={styles.linkBoxTop}>
                <DynamicIcon name={link.icon} size={20} color={'#C7B299'} />
                <span>{link.name}</span>
            </Link>
            <div className={`${styles.linkBoxBottom}`}>
                    {link.subcategories.map(category => (
                        <Link onClick={handleOpenMenu} href={`${link.path}/${category.id}`} className={styles.subLinkItem} key={category.id}>
                            {category.name}
                        </Link>
                    ))}
            </div>
        </div>
    );
}
