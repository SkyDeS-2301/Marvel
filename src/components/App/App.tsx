import styles from './App.module.scss'
import {FC} from "react";
import AppHeader from "../AppHeader/AppHeader.tsx";
import CharactersPage from "../CharactersPage/CharactersPage.tsx";
// import ComicsPage from "../ComicsPage/ComicsPage.tsx";

const App: FC = () => {


    return (
        <div className={styles.wrapper}>
            <div className='container'>
                <div className={styles.wrapper__inner}>
                    <AppHeader/>

                    <main className={styles.main}>
                            <div className={styles.main__inner}>
                                <CharactersPage/>
                                {/*<ComicsPage/>*/}
                            </div>
                    </main>

                </div>
            </div>
        </div>
    )
}

export default App