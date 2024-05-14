import styles from './CharacterList.module.scss'
import Loki from '../../resources/Loki.png';
import {FC} from "react";
import CharacterItem from "./CharacterItem/CharacterItem.tsx";
import MyButtonRed from "../MyButton/MyButtonRed.tsx";
const CharacterList:FC = () => {
    return (
        <>
            <div className={styles.list}>
                <CharacterItem imagesPath={Loki} characterName={'LOKI'}/>
            </div>

            <div className={styles.list__btn}>
                <MyButtonRed text='LOAD MORE'/>
            </div>
        </>
    );
};

export default CharacterList;