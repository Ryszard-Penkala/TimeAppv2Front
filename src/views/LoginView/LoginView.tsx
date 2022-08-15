import React, {FormEvent, useState} from "react";
import styles from './LoginView.module.scss';
import {Link, useNavigate} from "react-router-dom";


export const LoginView = () => {
    interface emailDataInterface {
        email: string;
        pwd: string
    }

    const navigate = useNavigate();

    const navigateToSignin = () => {
        navigate('/time-report', {replace: true});
    }

    const [emailData, setEmailData] = useState<emailDataInterface>( //@TODO('implements interface from BE user/register.dto czy coś takiego')
        {
            email: '',
            pwd: '',
        })

    const updateEmailData = (key: string, value: string)=>{
        setEmailData(emailData=>({
            ...emailData,
            [key]: value,
        }))

    }

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3001/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(emailData),
            });
            const data = await res.json();
            console.log(data.ok)
            data.ok && navigateToSignin();
        } catch (e) {
            throw new Error('something went wrong');
        };
    }

    return (
        <form className={styles.formContainer} onSubmit={sendForm}>
            <div className={styles.formTitle}>
                Log in view
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                    E-mail
                    <input
                        type="email"
                        name='email'
                        className={styles.formInput}
                        placeholder='Email'
                        value={emailData.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>)=> updateEmailData("email", e.target.value)}
                    />
                </label>

            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                    Password
                    <input
                        type="password"
                        name='password'
                        className={styles.formInput}
                        placeholder='Password'
                        value={emailData.pwd}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => updateEmailData("pwd", e.target.value)}
                    />
                </label>

            </div>
            <div className={styles.formForgotPassword}>
                <a href="#">Forgot password?</a>
            </div>
            <div className={styles.formFooter}>

                <div className={styles.formRegister}>
                    Don’t have an account?
                    <Link to="/signin">Signin</Link>
                </div>
                <button type="submit">Log in</button>
            </div>
        </form>
    )
}