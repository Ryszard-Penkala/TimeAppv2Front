import styles from './TimeRegistrationTabView.module.scss';
import React, {FormEvent, useEffect, useState} from "react";
import {Spinner} from "../../common/Spinner/Spinner";
import { getAllUsersReportResponse } from 'types';
import {ActionButton} from "../../components/Buttons/ActionButton/ActionButton";

export const TimeRegistrationTabView = () => {

    const [taskDescription, setTaskDescription] = useState<string>('')
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

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();

        try{

        }

    };

    const updateTaskDescription = (value: string) => {
        setTaskDescription(String(value));
    };

    return  (
        <>
            <section className={styles.mainSection}>
                <div className={styles.mainSectionGroup}>
                    <div className={styles.mainSectionHeader}>
                        <h2>Welcome to the time registration TAB</h2>
                    </div>
                    <p className={styles.mainSectionParagraph}>
                        Please click 'Start task' to start counting time of your actual task. Remember to add task description.
                    </p>
                </div>
                <div className={styles.mainSectionForm}>
                    <form onSubmit={sendForm} className={styles.formContainer}>
                        <div className={styles.formTitle}>
                            Add description of your task.
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                                <textarea
                                    name='taskDescription'
                                    className={styles.formInput}
                                    placeholder='Task description...'
                                    value={taskDescription}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateTaskDescription(e.target.value)}
                                />

                            </label>

                        </div>
                        <div className={styles.formFooter}>
                            <ActionButton buttonText="Start task"/>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )

}