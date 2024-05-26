import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Geport_result1({ nextPage }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            nextPage();
        }, 2000);

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
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