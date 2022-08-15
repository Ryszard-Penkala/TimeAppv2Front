import styles from './Spinner.module.scss';

export const Spinner = () => {
    return (
        <div className={styles.ldsRipple}>
            <div></div>
            <div></div>
        </div>
    )
}