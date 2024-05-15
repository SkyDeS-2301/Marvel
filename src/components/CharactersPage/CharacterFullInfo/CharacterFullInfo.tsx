import styles from './CharacterFullInfo.module.scss'
import {FC} from "react";
import Advertising from "../../ComicsPage/Advertising/Advertising.tsx";
import loki from '../../../resources/Loki.png';

const CharacterFullInfo: FC = () => {
    return (
        <div className={styles.item}>
            <Advertising/>

            <div className={styles.item__info}>
                <img src={loki} alt='Character' className={styles.item__img}/>

                <div className={styles.item__content}>
                    <h3 className={styles.item__name}>LOKI</h3>
                    <p className={styles.item__text}>
                        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey,
                        and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel,
                        the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
                        Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to
                        the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the
                        Prose Edda.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CharacterFullInfo;