import styles from './RandomCharacter.module.scss'
import {FC} from "react";
import RandomInfo from "./RandomInfo/RandomInfo.tsx";
import RandomChoice from "./RandomChoice/RandomChoice.tsx";

const RandomCharacter:FC = () => {
    return (
        <div className={styles.random}>
            <div className='container'>
                <div className={styles.random__inner}>
                    <RandomInfo/>

                    <RandomChoice/>
                </div>
            </div>
        </div>
    );
};

export default RandomCharacter;