import styles from "./TimeReportTabView.module.scss"
import {useEffect, useState} from "react";
import {Spinner} from "../../common/Spinner/Spinner";
import { getAllUsersReportResponse } from "types";
import {Button} from "../../components/Button/Button";

export const TimeReportTabView = () => {

    const [loadingData, setLoadingData] = useState< getAllUsersReportResponse | null>(null)

    const fetchData = async () => {
        setLoadingData(null);
        const response = await fetch(`http://localhost:3001/time-registration`,{
            credentials: 'include',
        });
        const data = await response.json()
        await setLoadingData(data.statusCode);
    }

    useEffect(()=> {
        fetchData()
            .catch(console.error);
    }, []);


    if(loadingData === null) {
        return <Spinner/>
    }

    if(Number(loadingData) === 401) {
        return (
            <h1>You shall not pass</h1>
        )
    }

    return  (
        <>
            <section className={styles.mainSectionGroup}>
                <div className={styles.mainSectionHeader}>
                    <h2>Welcome to the time record tab</h2>
                </div>
                <p className={styles.mainSectionParagraph}>
                    Please choose which report would you like to see
                </p>
                <div className={styles.mainSectionButtons}>
                    <Button children = "Current User report" link="/#"/>
                    <Button children = "All User report" link="/#" />
                </div>
            </section>
        </>
    )

}