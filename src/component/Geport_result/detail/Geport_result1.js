import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

// API 요청을 분리하여 관리
export const get_api = () => {
    return axios.get("/BE/fastapi/geport/database/list", {
        withCredentials: true,
        headers: {"Content-Type": 'application/json'}
    });
};

export function Geport_result1({ nextPage }) {
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

        return () => clearTimeout(timer);
    }, [nextPage]);

    return (
        <div style={styles.container}>
            <img src="/image/geport_green_logo.png" alt="Logo" style={styles.logo} />
            <h1 style={styles.title}>Geport 결과 보고서</h1>
            <p style={styles.subtitle}>작성하신 블로그를 바탕으로 퍼스널 브랜딩 솔루션을 만들어드립니다.</p>
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
};
