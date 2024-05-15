import styles from './CharacterInformation.module.scss'
import {FC} from "react";
import CharacterForm from "./CharacterForm/CharacterForm.tsx";
import CharacterInformationEmpty from "./CharacterInformationEmpty/CharacterInformationEmpty.tsx";
// import CharacterInformationItem from "./CharacterInformationItem/CharacterInformationItem.tsx";


const CharacterInformation: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__info}>
                <CharacterInformationEmpty/>
                {/*<CharacterInformationItem/>*/}
            </div>

            <CharacterForm/>
        </div>
    );
};

export default CharacterInformation;