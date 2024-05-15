import styles from './ComicsItem.module.scss'
import {FC} from "react";
import comics1 from '../../../../resources/comics1.png'
const ComicsItem:FC = () => {
    return (
        <div className={styles.item}>
            <img src={comics1} alt='Comics' className={styles.img}/>

            <div className={styles.item__content}>
                <div className={styles.item__name}>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                <p className={styles.item__price}>9.99$</p>
            </div>

        </div>
    );
};

export default ComicsItem;