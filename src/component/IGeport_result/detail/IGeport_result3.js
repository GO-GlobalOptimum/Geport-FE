import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartDataLabels);

export function IGeport_result3({ nextPage }) {

    const inputContent = [
        "사건은 다가와 Ah Oh Ay",
        "거세게 커져가 Ah Oh Ay",
        "That tick that tick tick bomb",
        "That tick that tick tick bomb",
        "감히 건드리지 못할 걸",
        "(누구도 말이야)",
        "지금 내 안에선",
        "Su su su Supernova",
        "Nova",
        "Can't stop hyperstellar",
        "원초 그걸 찾아",
        "Bring the light of a dying star",
        "불러낸 내 우주를 봐 봐",
        "Supernova",
        "Ah Body bang"
    ];

    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.container2}></div>
                <div style={styles.container3}>
                    <span style={styles.title}>Username 님의 블로그를 분석했어요</span>
                </div>
                <div style={styles.container7}>
                    <div style={styles.content}>
                        <div style={styles.summaryContainer}>
                            {inputContent.map((line, index) => (
                                <span key={index} style={styles.text}>{line}</span>
                            ))}
                        </div>
                        <div style={styles.summaryContainer}>
                            {inputContent.map((line, index) => (
                                <span key={index} style={styles.text}>{line}</span>
                            ))}
                        </div>
                        <div style={styles.summaryContainer}>
                            {inputContent.map((line, index) => (
                                <span key={index} style={styles.text}>{line}</span>
                            ))}
                        </div>
                        <div style={styles.summaryContainer}>
                            {inputContent.map((line, index) => (
                                <span key={index} style={styles.text}>{line}</span>
                            ))}
                        </div>
                    </div>
                    <div style={styles.pageCount}>
                        <svg width="10" height="180" viewBox="0 0 10 180" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" transform="rotate(90 5 5)" fill="#1AE57C"/>
                            <circle cx="5" cy="39" r="5" transform="rotate(90 5 39)" fill="#C6C6C6"/>
                            <circle cx="5" cy="73" r="5" transform="rotate(90 5 73)" fill="#C6C6C6"/>
                            <circle cx="5" cy="107" r="5" transform="rotate(90 5 107)" fill="#C6C6C6"/>
                        </svg>
                    </div>
                </div>
                <div style={styles.container4}>
                    <button
                        style={styles.button}
                        onClick={nextPage}
                    >
                        다음으로
                    </button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundColor: '#1E1E1E',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    chartTitle: {
        marginBottom: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'white',
    },
    container1: {
        position: 'relative',
        width: '75%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    container2: {
        position: 'relative',
        width: '100%',
        height: '15vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    container3: {
        position: 'relative',
        width: '100%',
        height: '7.5vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        margin: '1%'
    },
    title: {
        paddingLeft: '50px',
        fontWeight: '600',
        color: 'white',
        fontSize: '32px'
    },
    container4: {
        position: 'relative',
        width: '100%',
        height: '15vh',
        display: 'flex',
        color: 'black',
        fontSize: '23px',
        fontWeight: '300',
        paddingTop: '60px',
        paddingLeft: '60px'
    },
    container7: {
        position: 'relative',
        width: '90%',
        height: '50vh',
        display: 'flex',
        backgroundColor: '#1E1E1E',
    },
    content: {
        position: 'relative',
        width: "100%",
        height: '50vh',
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: "15%",
        marginRight: "8%",
        marginBottom: "2%"
    },
    inputContainer: {
        width: '100%',
        height: "25vh",
        paddingLeft: '60px',
        backgroundColor: '#1E1E1E',
        overflowY: 'auto',
        marginRight: "20%"
    },
    summaryContainer: {
        width: '45%',
        height: '45%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2.5%',
        overflowY: 'auto'
    },
    pageCount: {
        position: 'relative',
        width: '10%', // Adjust the width as needed
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E1E1E'
    },
    graphImage: {
        width: '100%',
        height: 'auto',
    },
    button: {
        width: '10vw',
        height: '5vh',
        backgroundColor: '#1AE57C',
        color: 'black',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '24px',
        fontWeight: '600'
    },
    text:{
        color: "white",
        fontSize: "18px",
        lineHeight: "160%",
    }
};
