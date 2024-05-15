import styles from './CharacterComicsList.module.scss'
import {FC} from "react";
import CharacterComicsItem from "./CharacterComicsItem/CharacterComicsItem.tsx";
const CharacterComicsList:FC = () => {
    return (
        <div className={styles.comics}>
            <h2 className={styles.comics__title}>Comics</h2>

            <ul className={styles.comics__list}>
                <CharacterComicsItem comic='All-Winners Squad: Band of Heroes (2011) #3'/>
                <CharacterComicsItem comic='Alpha Flight (1983) #50'/>
                <CharacterComicsItem comic='Amazing Spider-Man (1999) #503'/>
                <CharacterComicsItem comic='Amazing Spider-Man (1999) #504'/>
                <CharacterComicsItem comic='AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)'/>
                <CharacterComicsItem comic='Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)'/>
                <CharacterComicsItem comic='Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)'/>
                <CharacterComicsItem comic='Vengeance (2011) #4'/>
                <CharacterComicsItem comic='Avengers (1963) #1'/>
                <CharacterComicsItem comic='Avengers (1996) #1'/>
            </ul>
        </div>
    );
};

export default CharacterComicsList;