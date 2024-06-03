import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";


export const get_api = () => {
    return axios.get("/BE/fastapi/igeport/database/list", {
        withCredentials: true,
        headers: {"Content-Type": 'application/json'}
    });
};

export function IGeport_result1({ nextPage }) {

    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await get_api();
                if (response.data.length > 0) {
                    setUserData(response.data[0]);  // 첫 번째 데이터만 저장
                } else {
                    console.error('No data received');
                }
            } catch (error) {
                console.error("There was an error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

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
        width: '100px', // Adjust the width according to your preference
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
};
