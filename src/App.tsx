import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import styles from './App.module.css'
import {HeaderWrapper} from "./components/Wrappers/HeaderWrapper";
import {LoginView} from "./views/LoginView/LoginView";
import {SignInView} from "./views/SignUpView/SignInView";
import {NotFoundView} from "./views/NotFoundView/NotFoundView";
import {TimeReportView} from "./views/TimeReportView/TimeReportView";

function App() {
    return (
        <div className={styles.App}>
            <HeaderWrapper/>
            <div className={styles.mainContainer}>
                <Routes>
                    <Route path="/" element={<Navigate to="/login"/>}/>
                    <Route path="/login" element={<LoginView/>}/>
                    <Route path="/signin" element={<SignInView/>}/>
                    <Route path="/time-report" element={< TimeReportView />}/>
                    <Route path="*" element={<NotFoundView/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
