import styles from './AllUsersReportView.module.scss';
import {useEffect, useState} from "react";
import {Spinner} from "../../common/Spinner/Spinner";
import {getAllUsersReportResponse} from 'types';
import { AllTasksTable } from '../../components/AllTasksTable/AllTasksTable';

export const AllUsersReportView = () => {

    const [loadingData, setLoadingData] = useState<getAllUsersReportResponse | null>(null)


    useEffect(() => {

        const fetchData = async () => {
            setLoadingData(null)
            const response = await fetch(`http://localhost:3001/time-report/all-users`, {
                credentials: 'include',
            });
            const json = await response.json()
            setLoadingData(json);
        }

        fetchData()
            .catch(console.error);
    }, []);


    if (loadingData === null) {
        return <Spinner/>
    }

    if (Number(loadingData) === 401) {
        return (
            <h1>You shall not pass</h1>
        )
    }


    return (
        <>
            <h1 className={styles.headerOne}>AllUsersReportView</h1>s
            <AllTasksTable allTasksList = {loadingData}
            />
        </>
    )

}