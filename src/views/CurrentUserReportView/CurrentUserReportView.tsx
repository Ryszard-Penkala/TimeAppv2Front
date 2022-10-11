import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Spinner} from "../../common/Spinner/Spinner";
import styles from "CurrentUserReportView.module.scss";
import { getAllUsersReportResponse } from "types";
import {AllTasksTable} from "../../components/AllTasksTable/AllTasksTable";

export const CurrentUserReportView = () => {
    const {userId} = useParams()

    const [loadingData, setLoadingData] = useState<getAllUsersReportResponse | null>(null)


    useEffect(() => {

        const fetchData = async () => {
            setLoadingData(null)
            const response = await fetch(`http://localhost:3001/time-report/${userId}`, {
                credentials: 'include',
            });
            const json = await response.json()
            console.log(json);
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
        // <div className={styles.allUsersReportSection}>
        //     <h1 className={styles.headerOne}>AllUsersReportView</h1>
        //     <AllTasksTable allTasksList = {loadingData}/>
        // </div>

        <div>
            <AllTasksTable allTasksList = {loadingData}/>
        </div>
    )

}