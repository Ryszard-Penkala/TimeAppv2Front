import React, {FormEvent, useState} from "react";
import styles from './SignInView.module.scss';
import {Link} from "react-router-dom";

export const SignInView = () => {
    interface emailDataInterface {
        email: string;
        pwdHash: string
    }

    const [signIn, setSignIn] = useState(false);

    const [emailData, setEmailData] = useState< emailDataInterface >( //@TODO('implements interface from BE user/register.dto czy coś takiego')
        {
            email: '',
            pwdHash: '',
        });

    const [emailExists, setEmailExists] = useState<boolean>(false);

    const updateEmailData = (key: string, value: string) => {
        setEmailData(emailData => ({
            ...emailData,
            [key]: value,
        }));
    };

    const sendForm = async (e: FormEvent) => {

        e.preventDefault();

            const emailCheck = await fetch(`http://localhost:3001/user/register/${emailData.email}`)
            const dataEmailCheck = await emailCheck.json()

            dataEmailCheck ? setEmailExists(true) : setEmailExists(false);

            if (dataEmailCheck) {
                throw new Error('Email already in use');
            }
        try {
            const res = await fetch(`http://localhost:3001/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailData),
            });
            const data = await res.json();
            setSignIn(true);
        } finally {
            setEmailExists(false);
        };
    };


    return (
        <>
            {signIn
                ? <h2>Account created. Please <Link to='/login'>Login</Link></h2>
                : <form onSubmit={sendForm} className={styles.formContainer}>
                    <div className={styles.formTitle}>
                        Sign In View
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>
                            E-mail
                            <input
                                type="email "
                                name='email'
                                className={styles.formInput}
                                placeholder='Email'
                                value={emailData.email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateEmailData("email" , e.target.value)}
                            />
                        </label>
                        <p className={styles.labelNotification}>
                            {emailExists && `Email ${emailData.email} already exists. Please use different email address.`}
                        </p>

                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>
                            Password
                            <input
                                type="password"
                                name='password'
                                className={styles.formInput}
                                placeholder='Password'
                                value={emailData.pwdHash}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateEmailData("pwdHash", e.target.value)}
                            />
                        </label>

                    </div>

                    <div className={styles.formFooter}>

                        <div className={styles.formRegister}>
                            Account created?
                            <Link to="/login">Login</Link>
                        </div>
                        <button type="submit">Sign in</button>
                    </div>
                </form>
            }
        </>
    )
}