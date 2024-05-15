import styles from './GlobalDecor.module.scss'
import mainDecor from '../../resources/main-bg-decor.png'
import {FC} from "react";
const GlobalDecor:FC = () => {
    return (
        <img src={mainDecor} alt='Decor' className={styles.decor}/>
    );
};

export default GlobalDecor;