import styles from "./HeaderWrapper.module.scss";
import React from "react";
import {NavLink} from "react-router-dom";

export const HeaderWrapper = () => {

    const styleOfLink = ({ isActive }: { isActive: boolean;})=>({color: isActive ? 'blue' : 'red'})

    return (
        <header className={styles.navigationHeader}>
            <div className={styles.navigationPanel}>
                <NavLink to='/login' style={styleOfLink}>Login</NavLink>
                <NavLink to='/signin' style={styleOfLink} >Signin</NavLink>
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