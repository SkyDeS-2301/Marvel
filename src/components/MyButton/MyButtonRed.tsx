import styles from './MyButton.module.scss'
import {FC} from "react";

type PropsType = {
    text: string
}
const MyButtonRed:FC<PropsType> = (props) => {
    return (
        <a href='#!' className={`${styles.btn} ${styles.btn__red}`}>{props.text}</a>
    );
};

export default MyButtonRed;