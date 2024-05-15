import styles from './CharacterForm.module.scss'
import MyButtonRed from "../../../MyButton/MyButtonRed.tsx";
import {FC} from "react";
import MyButtonGray from "../../../MyButton/MyButtonGray.tsx";
const CharacterForm:FC = () => {
    return (
        <form className={styles.form}>
            <h3 className={styles.form__title}>Or find a character by name:</h3>

            <div className={styles.form__field}>
                <div className={styles.form__left}>
                    <input type='text'
                           className={styles.form__input}
                           placeholder='Enter name'
                    />

                    <p className={`${styles.form__message}`}>11111111111111111</p>
                </div>


                <div className={styles.form__btns}>
                    <MyButtonRed text='FIND'/>
                    <div className={styles.form__hide}>
                        <MyButtonGray text='TO PAGE'/>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CharacterForm;