import React, {useEffect, useState} from 'react';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {getCookie} from "../../../function/cookies";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

export function IGeport_result4({ nextPage }) {
    const name = "유현우";
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('result')).result.blogs_emotionSos.emotion_sos);
    console.log(userData)
    // 데이터가 유효한지 확인 후 변수에 할당
    const anger = userData ? userData.sentiments.anger : 0;
    const anxious = userData ? userData.sentiments.anxious : 0;
    const sadness = userData ? userData.sentiments.sadness : 0;
    const depressed = userData ? userData.sentiments.depressed : 0;
    const summary = userData ? userData.contents : "";

    const barChartData = {
        labels: ['ANGER', 'ANXIOUS', 'SADNESS', 'DEPRESSED'],
        datasets: [
            {
                label: 'Negative Emotion Levels',
                data: [anger, anxious, sadness, depressed],
                backgroundColor: 'rgba(26, 229, 124, 0.5)',
                borderColor: '#1AE57C',
                borderWidth: 1,
            },
        ],
    };

    const barChartOptions = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                color: 'white',
                anchor: 'end',
                align: 'end',
            }
        },
        scales: {
            x: {
                title: {
                    display: false,
                },
                ticks: {
                    beginAtZero: true,
                    color: 'white',
                },
                grid: {
                    color: '#444',
                }
            },
            y: {
                title: {
                    display: false,
                },
                ticks: {
                    color: 'white',
                },
                grid: {
                    color: '#444',
                }
            },
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.container2}></div>
                <div style={styles.container3}>
                    <span style={styles.title}>이 기간 동안 {name} 님의 감정 SOS를 알려드려요</span>
                </div>
                <div style={styles.container7}>
                    <div style={styles.content}>
                        <div style={styles.graphContainer}>
                            <Bar data={barChartData} options={barChartOptions} />
                        </div>
                        <div style={styles.inputContainer}>
                            <div>
                                <span style={styles.text}>{summary}</span>
                            </div>
                        </div>
                    </div>
                    <div style={styles.pageCount}>
                        <svg width="10" height="180" viewBox="0 0 10 180" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" transform="rotate(90 5 5)" fill="#C6C6C6"/>
                            <circle cx="5" cy="39" r="5" transform="rotate(90 5 39)" fill="#1AE57C"/>
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
    },
    subtitle: {
        paddingLeft: '50px',
        fontWeight: '600',
        color: '#C6C6C6',
        fontSize: '20px',
        paddingTop: '2%'
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
    container3 : { // 문구 입력창
        position:"relative",
        width: "100%",
        height:"8.5vh",
        display:'flex',
        flexDirection:'column',
        overflow:"hidden",
        margin:"1%"
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
        //  flexDirection: 'column',
        backgroundColor: '#1E1E1E',
    },content:{
        position:'relative',
        width:"100%",
        height:'50vh',
        display:'flex',
        flexDirection:'column',
        marginRight:"10%"
    }
    ,
    inputContainer: {
        width: '100%',
        height:"25vh",
        paddingLeft: '60px',
        backgroundColor: '#1E1E1E',
        overflowY: 'auto',
        marginRight:"20%",
        marginTop:"5%"
    },graphContainer: {
        width: '50%', // Adjust the width as needed
        height: '30vh', // Adjust the height as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:"35%"
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
