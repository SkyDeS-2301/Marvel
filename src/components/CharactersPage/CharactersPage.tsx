import styles from './CharactersPage.module.scss'
import {FC} from "react";
import CharactersInfo from "./CharactersInfo/CharactersInfo.tsx";
// import CharacterFullInfo from "./CharacterFullInfo/CharacterFullInfo.tsx";

const CharactersPage:FC = () => {
    return (
        <div className={styles.wrapper}>
            <CharactersInfo/>

            {/*<CharacterFullInfo/>*/}
        </div>

    );
};

export default CharactersPage;