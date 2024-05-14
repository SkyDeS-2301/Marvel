import styles from './CharacterItem.module.scss'
import {FC} from "react";

type PropsType = {
    imagesPath: string
    characterName: string
}
const CharacterItem:FC<PropsType> = (props) => {
    return (
        <div className={styles.character}>
            <img src={props.imagesPath} alt='Character' className={styles.character__img}/>
            <h3 className={`title ${styles.character__title}`}>{props.characterName}</h3>
        </div>
    );
};

export default CharacterItem;