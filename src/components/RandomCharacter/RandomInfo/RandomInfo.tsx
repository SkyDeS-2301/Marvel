import styles from './RandomInfo.module.scss'
import {FC} from "react";
import MyButtonRed from "../../MyButton/MyButtonRed.tsx";
import MyButtonGray from "../../MyButton/MyButtonGray.tsx";
import Thor from '../../../resources/Thor.jpg'

const RandomInfo: FC = () => {
    return (
        <div className={styles.info}>
            <img src={Thor} alt='Character' className={styles.info__img}/>

            <div className={styles.info__content}>
                <h2 className={`title ${styles.info__title}`}>THOR</h2>

                <p className={styles.info__text}>As the Norse God of thunder and lightning, Thor wields one of the greatest
                    weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an
                    over-muscled, oafish imbecile, he's quite smart and compassionate...
                </p>

                <div className={styles.info__buttons}>
                    <MyButtonRed text='HOMEPAGE'/>

                    <MyButtonGray text='WIKI'/>
                </div>
            </div>
        </div>
    );
};

export default RandomInfo;