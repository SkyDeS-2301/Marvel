import styles from './CharacterInformationEmpty.module.scss'
import {FC} from "react";
const CharacterInformationEmpty:FC = () => {
    return (
        <div className={styles.card}>
            <h2 className={styles.card__title}>Please select a character to see information</h2>

            <div className={styles.card__content}>
                <div className={styles.card__begin}>
                    <div className={styles.card__circle}></div>
                    <div className={styles.card__rectangle_small}></div>
                </div>
                <div className={styles.card__rectangles}>
                    <div className={styles.card__rectangle}></div>
                    <div className={styles.card__rectangle}></div>
                    <div className={styles.card__rectangle}></div>
                </div>
            </div>
        </div>
    );
};

export default CharacterInformationEmpty;