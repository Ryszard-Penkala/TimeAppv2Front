import {useEffect, useState} from "react";
import {getAllUsersReportResponse} from 'types'
import {Spinner} from "../../common/Spinner/Spinner";

export const TimeReportView = () => {

    const [loadingData, setLoadingData] = useState< getAllUsersReportResponse | null>(null)


    const fetchData = async () => {
        setLoadingData(null);
        const response = await fetch(`http://localhost:3001/time-registration`,{
            credentials: 'include',
        });
        const data = await response.json()
        await setLoadingData(data);
    }

    useEffect(()=> {
        fetchData()
            .catch(console.error);
        }, []);


    if(loadingData === null) {
        return <Spinner/>
    }

    return  (
        <>
            <h2>loadingData: {loadingData[1].id}</h2>
        </>
    )
}