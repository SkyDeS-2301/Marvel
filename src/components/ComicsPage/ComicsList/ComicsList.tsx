import styles from './ComicsList.module.scss'
import {FC} from "react";
import ComicsItem from "./ComicsItem/ComicsItem.tsx";
import MyButtonRed from "../../MyButton/MyButtonRed.tsx";
const ComicsList:FC = () => {
    return (
        <>
            <ul className={styles.list}>
                <ComicsItem/>
                <ComicsItem/>
                <ComicsItem/>
                <ComicsItem/>
                <ComicsItem/>
                <ComicsItem/>
            </ul>

            <div className={styles.more}>
                <MyButtonRed text='LOAD MORE'/>
            </div>
        </>

    );
};

export default ComicsList;