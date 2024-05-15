import styles from './MyButton.module.scss'
import {FC} from "react";

type PropsType = {
    text: string
    path?: string
}
const MyButtonRed:FC<PropsType> = (props) => {
    return (
        <a href={props.path} className={`${styles.btn} ${styles.btn__red}`}>{props.text}</a>
    );
};

export default MyButtonRed;