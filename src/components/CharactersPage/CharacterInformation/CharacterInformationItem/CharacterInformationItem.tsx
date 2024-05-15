import styles from './CharacterInformationItem.module.scss'
import {FC} from "react";
import MyButtonRed from "../../../MyButton/MyButtonRed.tsx";
import MyButtonGray from "../../../MyButton/MyButtonGray.tsx";
import CharacterComicsList from "../CharacterComics/CharacterComicsList.tsx";
import Loki from '../../../../resources/Loki.png'
const CharacterInformationItem:FC = () => {
    return (
            <div className={styles.information}>

                <div className={styles.information__avatar}>
                    <img src={Loki} alt='Avatar' className={styles.information__avatar_img}/>

                    <div className={styles.information__avatar_content}>
                        <h2 className={styles.information__avatar_name}>LOKI</h2>
                        <div className={styles.information__avatar_btns}>
                            <MyButtonRed text='HOMEPAGE'/>
                            <MyButtonGray text='WIKI'/>
                        </div>
                    </div>
                </div>

                <p className={styles.information__text}>In Norse mythology, Loki is a god or jötunn (or both). Loki
                    is the
                    son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða,
                    Loki is
                    the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the
                    father of
                    Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of
                    a
                    mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli
                    in the
                    Prose Edda.
                </p>

                <CharacterComicsList/>

            </div>

    );
};

export default CharacterInformationItem;