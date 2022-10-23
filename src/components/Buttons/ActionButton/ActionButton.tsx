import styles from "./ActionButton.module.scss"
import React from "react";

interface Props {
    buttonText: string
}

export const ActionButton: React.FC<Props> = ({buttonText}) => {

    return(
        <button type='submit' className={styles.actionButton}>
            {buttonText}
        </button>
    )
}