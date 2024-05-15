import styles from './CharacterComicsItem.module.scss'
import {FC} from "react";

type PropsType = {
    comic: string
}
const CharacterComicsItem:FC<PropsType> = (props) => {
    return (
        <li className={styles.item}>
            {props.comic}
        </li>
    );
};

export default CharacterComicsItem;