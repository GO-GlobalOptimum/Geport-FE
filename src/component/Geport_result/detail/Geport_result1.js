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
            <h1 style={styles.title}>iGeport 결과 보고서</h1>
            <p style={styles.subtitle}>iGeport는 총 여섯 단계로 블로그에 드러난 당신의 심리를 분석합니다</p>
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
