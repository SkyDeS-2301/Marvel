import styles from './RandomChoice.module.scss'
import {FC} from "react";
import MyButtonRed from "../../MyButton/MyButtonRed.tsx";
import hammer from '../../../resources/hammer.png'

const RandomChoice:FC = () => {
    return (
        <div className={styles.choice}>
            <h2 className={styles.choice__title}>Random character for today!</h2>
            <p className={styles.choice__quastion}>Do you want to get to know him better?</p>
            <span className={styles.choice__another}>Or choose another one</span>

            <MyButtonRed text='TRY IT'/>
            <img src={hammer} alt='hammer' className={styles.choice__decor}/>
        </div>
    );
};

export default RandomChoice;