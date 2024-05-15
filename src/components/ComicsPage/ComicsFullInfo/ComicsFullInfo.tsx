import styles from './ComicsFullInfo.module.scss'
import {FC} from "react";
import comics from '../../../resources/comics1.png'

const ComicsFullInfo: FC = () => {
    return (
        <div className={styles.item}>
            <img src={comics} alt='Comics' className={styles.item__img}/>

            <div className={styles.item__content}>
                <div className={styles.item__informations}>
                    <h2 className={styles.item__title}>X-Men: Days of Future Past</h2>

                    <button className={styles.item__back}>Back to all</button>
                </div>

                <p className={styles.item__text}>
                    Re-live the legendary first journey into the dystopian future of 2013 -
                    where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also
                    featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men
                    from Cyclops himself...and a demon for Christmas!?
                </p>

                <div className={styles.item__pages}>144 pages</div>

                <p className={styles.item__langs}>Language: en-us</p>

                <p className={styles.item__price}>9.99$</p>
            </div>
        </div>
    );
};

export default ComicsFullInfo;