import styles from './CharactersInfo.module.scss'
import RandomCharacter from "../../RandomCharacter/RandomCharacter.tsx";
import CharacterList from "../CharacterList/CharacterList.tsx";
import CharacterInformation from "../CharacterInformation/CharacterInformation.tsx";
import GlobalDecor from "../../GlobalDecor/GlobalDecor.tsx";

const CharactersInfo = () => {
    return (
        <div>
            <RandomCharacter/>
            <div className={styles.characters}>
                <CharacterList/>

                <CharacterInformation/>
            </div>

            <GlobalDecor/>
        </div>
    );
};

export default CharactersInfo;