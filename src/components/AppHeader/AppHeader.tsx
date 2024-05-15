import styles from './AppHeader.module.scss'
import {FC} from "react";
import Nav from "./Nav/Nav.tsx";

const AppHeader:FC = () => {
    return (
        <header className={styles.header}>
                <div className={styles.header__inner}>
                    <h1 className={styles.header__title}>
                        <span className={styles.header__subtitle}>Marvel </span>
                        information portal
                    </h1>

                    <Nav/>
                </div>
        </header>
    );
};

export default AppHeader;