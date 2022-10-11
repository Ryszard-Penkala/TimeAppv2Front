import styles from "./HeaderWrapper.module.scss";
import React from "react";
import {NavLink} from "react-router-dom";

export const HeaderWrapper = () => {


    return (
        <header className={styles.navigationHeader}>
            <div className={styles.navigationPanel}>
                <NavLink to='/signin' className={({isActive})=>isActive ? styles.navigationLinkActive : styles.navigationLink}>Signin</NavLink>
                <NavLink to='/login' className={({isActive})=>isActive ? styles.navigationLinkActive : styles.navigationLink}>Login</NavLink>
            </div>
            <div className={styles.navigationTitle}>
                <h2>
                    Working Time Registration Application
                </h2>
            </div>
            <div className={styles.userPanel}>
                Jakieś logowanko
            </div>
        </header>
    )
}