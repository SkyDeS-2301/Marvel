import styles from "./Nav.module.scss";
import {FC} from "react";

const Nav:FC = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={`${styles.nav__item} ${styles.nav__item_active}`}>Characters</li>
                <li className={styles.nav__item}>/</li>
                <li className={styles.nav__item}>Comics</li>
            </ul>
        </nav>
    );
};

export default Nav;