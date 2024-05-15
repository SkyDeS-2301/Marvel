import styles from './Advertising.module.scss'
import {FC} from "react";
import avengers from '../../../resources/Avengers.png'
import avengersLogo from '../../../resources/logoAvengers.png'
const Advertising:FC = () => {
    return (
        <div className={styles.avengers}>
            <div className={styles.avengers__info}>
                <img src={avengers} alt='Avengers' className={styles.avengers__img}/>
                <p className={styles.avengers__text}>
                    New comics every week!
                    <span className={styles.avengers__subText}>Stay tuned!</span>
                </p>
            </div>
            <img src={avengersLogo} alt='Avengers Logo' className={styles.avengers__logo}/>
        </div>
    );
};

export default Advertising;