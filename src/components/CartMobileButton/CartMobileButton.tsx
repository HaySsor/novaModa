import styles from './CartMobileButton.module.scss'
import { ShoppingCart } from 'lucide-react';

export const CartMobileButton = () => {

    return (
        <div className={styles.cartButton}>
            <ShoppingCart size={22} fill="#333" />

            <div className={styles.cartButtonCounter}>
                <span>10</span>
            </div>
        </div>
    )
}