import styles from './MyButton.module.scss'
import {FC} from "react";

type PropsType = {
    text: string
}
const MyButtonGray:FC<PropsType> = (props) => {
    return (
        <a href='#!' className={`${styles.btn} ${styles.btn__gray}`}>{props.text}</a>
    );
};

export default MyButtonGray;