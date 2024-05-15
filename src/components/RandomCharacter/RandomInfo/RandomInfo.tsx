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

                <p className={styles.info__text}>As the Norse God of thunder and lightning, Thor wields one of the
                    greatest
                    weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an
                    over-muscled, oafish imbecile, he's quite smart and compassionate...
                </p>

                <div className={styles.info__buttons}>
                    <MyButtonRed
                        text='HOMEPAGE'
                        path='#!'/>

                    <MyButtonGray
                        text='WIKI'
                        path='https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%BD%D0%B5%D0%BC%D0%B0%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%B2%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_Marvel'/>
                </div>
            </div>
        </div>
    );
};

export default RandomInfo;