import styles from './MyButton.module.scss'
import {FC} from "react";

type PropsType = {
    text: string
    path?: string
}
const MyButtonGray:FC<PropsType> = (props) => {
    return (
        <a href={props.path} className={`${styles.btn} ${styles.btn__gray}`}>{props.text}</a>
    );
};

export default MyButtonGray;