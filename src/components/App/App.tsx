import styles from './App.module.scss'
import {FC} from "react";
import AppHeader from "../AppHeader/AppHeader.tsx";
import RandomCharacter from "../RandomCharacter/RandomCharacter.tsx";
import CharacterList from "../CharacterList/CharacterList.tsx";
import CharacterInformation from "../CharacterInformation/CharacterInformation.tsx";

const App: FC = () => {


    return (
        <div className={styles.wrapper}>
            <AppHeader/>

            <main className={styles.main}>
                <RandomCharacter/>

                <div className='container'>
                    <div className={styles.main__inner}>
                        <CharacterList/>

                        <CharacterInformation/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App