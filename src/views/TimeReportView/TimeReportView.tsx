import styles from './TimeReportView.module.scss';
import {useEffect, useState} from "react";
import {getAllUsersReportResponse} from 'types'
import {Spinner} from "../../common/Spinner/Spinner";
import { Button } from '../../components/Button/Button';

export const TimeReportView = () => {

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
                    <h2>Welcome to the time registration application</h2>
                </div>
                <p className={styles.mainSectionParagraph}>
                    Choose which action you would like to take
                </p>
                <div className={styles.mainSectionButtons}>
                    <Button children = "Time Registration Tab" link="/time-registration-tab"/>
                    <Button children = "Time Report Tab" link="/time-report-tab" />
                </div>
            </section>
        </>
    )
}