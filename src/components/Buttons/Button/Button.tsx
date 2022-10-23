import styles from "./Button.module.scss"
import React from "react";
import {NavLink} from "react-router-dom";

interface Props {
    children?: string;
    link: string;
}

export const Button: React.FC<Props> = ({children, link}) => {

    return (
        <NavLink to={link} className={styles.button}>
            <div >
                {children}
            </div>
        </NavLink>
    )
}