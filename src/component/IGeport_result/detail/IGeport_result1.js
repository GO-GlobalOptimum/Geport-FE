import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from '../../../function/cookies'

export function IGeport_result1({ nextPage }) {

    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    // const getCookie = (name) => {
    //     const value = `; ${document.cookie}`;
    //     const parts = value.split(`; ${name}=`);
    //     if (parts.length === 2) return parts.pop().split(';').shift();
    // };

    const data = {
        post_ids: getCookie('selected_posts'),
        questions: [
            getCookie('igeport_answer2'),
            getCookie('igeport_answer3'),
            getCookie('igeport_answer4'),
            getCookie('igeport_answer5'),
            getCookie('igeport_answer6')
        ],
        result: JSON.parse(localStorage.getItem('result'))
    };


    useEffect(() => {
        if (userData) {
            console.log("Using user data:", userData);
        }
    }, [userData]);


    useEffect(() => {
        const timer = setTimeout(() => {
            nextPage();
        }, 2000);

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, [nextPage]);

    return (
        <div style={styles.container}>
            <img src="/image/geport_green_logo.png" alt="Logo" style={styles.logo} />
            <h1 style={styles.title}>iGeport 결과 보고서</h1>
            <p style={styles.subtitle}>iGeport는 총 여섯 단계로 블로그에 드러난 당신의 심리를 분석합니다.</p>
            {/* <div style={styles.dataContainer}>
                <h2>쿠키 데이터:</h2>
                <pre style={styles.pre}>{JSON.stringify(data, null, 2)}</pre>
            </div> */}
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        backgroundColor: '#1E1E1E',
        color: '#FFFFFF',
    },
    logo: {
        width: '100px',
        marginBottom: '20px',
    },
    title: {
        fontSize: '36px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    subtitle: {
        fontSize: '24px',
        fontWeight: '300',
    },
    dataContainer: {
        marginTop: '20px',
        textAlign: 'left',
        width: '80%',
        backgroundColor: '#2E2E2E',
        padding: '20px',
        borderRadius: '10px',
    },
    pre: {
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
    },
};
