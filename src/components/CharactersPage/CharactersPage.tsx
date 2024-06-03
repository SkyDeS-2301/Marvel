import styles from './CharactersPage.module.scss'
import {FC} from "react";
import RandomCharacter from "../RandomCharacter/RandomCharacter.tsx";
import CharacterList from "./CharacterList/CharacterList.tsx";
import CharacterInformation from "./CharacterInformation/CharacterInformation.tsx";
import GlobalDecor from "../GlobalDecor/GlobalDecor.tsx";

const CharactersPage:FC = () => {
    return (
        <div>
            <div>
                <RandomCharacter/>
                <div className={styles.characters}>
                    <CharacterList/>

                    <CharacterInformation/>
                </div>

                <GlobalDecor/>
            </div>

        </div>

    );
};

export default CharactersPage;