import styles from './ComicsPage.module.scss'
import {FC} from "react";
import Advertising from "./Advertising/Advertising.tsx";
// import ComicsList from "./ComicsList/ComicsList.tsx";
import ComicsFullInfo from "./ComicsFullInfo/ComicsFullInfo.tsx";

const ComicsPage:FC = () => {
    return (
        <div className={styles.wrapper}>
            <Advertising/>

            {/*<ComicsList/>*/}

            <ComicsFullInfo/>

        </div>
    );
};

export default ComicsPage;