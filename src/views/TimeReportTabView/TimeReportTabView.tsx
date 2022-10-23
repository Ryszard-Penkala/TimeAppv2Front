import styles from "./TimeReportTabView.module.scss"
import {useEffect, useState} from "react";
import {Spinner} from "../../common/Spinner/Spinner";
import { getAllUsersReportResponse } from "types";
import {Button} from "../../components/Buttons/Button/Button";

export const TimeReportTabView = () => {

    const [loadingData, setLoadingData] = useState< getAllUsersReportResponse | null>(null);
    const [userId, setUserId] = useState< string | null>(null);


    const fetchLoadingData = async () => {
        setLoadingData(null);
        setUserId(null);

        const response = await fetch(`http://localhost:3001/time-registration`,{
            credentials: 'include',
        });
        const data = await response.json();
        await setLoadingData(data.statusCode);
    }

    const fetchUserData = async () => {
        const userIdResponse = await fetch(`http://localhost:3001/time-report`,{
            credentials: 'include',
        });
        const dataUserId = await userIdResponse.json()
        await setUserId(dataUserId);
    }

    useEffect(()=> {
        fetchLoadingData()
            .catch(console.error);
        fetchUserData()
            .catch(console.error);
    }, []);


    if(loadingData === null ) {
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
                    <Button children = "Current User Report" link={`./time-report/${userId}`}/>
                    <Button children = "All User Report" link="./all-users-report" />
                </div>
            </section>
        </>
    )

}