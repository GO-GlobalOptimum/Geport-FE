import React, { useState } from 'react';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement, ChartDataLabels);

export function IGeport_result5({ nextPage }) {

    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('result')).result.blogs_emotionBig5.emotion_big5);

    console.log(userData)
    const pieChartData = {
        labels: ['개방성', '성실성', '외향성', '우호성', '섬세함'],
        datasets: [
            {
                data: [userData.extroversion.big5_score,
                    userData.friendliness.big5_score,
                    userData.neuroticism.big5_score, 
                    userData.openness.big5_score, 
                    userData.sincerity.big5_score], // 예시 데이터
                backgroundColor: [
                    '#1AE57C',
                    '#1BD48C',
                    '#1CC39C',
                    '#1DB2AC',
                    '#1EA1BC'
                ],
                borderColor: 'white',
                borderWidth: 1,
            },
        ],
    };

    const pieChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                color: 'black',
                formatter: (value, context) => {
                    return context.chart.data.labels[context.dataIndex];
                },
            }
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.container2}></div>
                <div style={styles.container3}>
                    <span style={styles.title}>블로그를 작성할 당시 조태완 님은 이런 모습이었어요</span>
                </div>
                <div style={styles.container7}>
                    <div style={styles.content}>
                        <div style={styles.graphContainer}>
                            <Pie data={pieChartData} options={pieChartOptions} />
                        </div>
                        <div style={styles.textContainer}>
                            <span style={styles.text}>
                                {userData.summary.big5_description}
                            </span>
                        </div>
                    </div>
                    <div style={styles.pageCount}>
                        <svg width="10" height="180" viewBox="0 0 10 180" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" transform="rotate(90 5 5)" fill="#C6C6C6"/>
                            <circle cx="5" cy="39" r="5" transform="rotate(90 5 39)" fill="#C6C6C6"/>
                            <circle cx="5" cy="73" r="5" transform="rotate(90 5 73)" fill="#1AE57C"/>
                            <circle cx="5" cy="107" r="5" transform="rotate(90 5 107)" fill="#C6C6C6"/>
                        </svg>
                    </div>
                </div>
                <div style={styles.container4}>
                    <button
                        style={styles.button}
                        onClick={nextPage} // 버튼 클릭 시 nextPage 호출
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
        width: '100%',
        height: '50vh',
        display: 'flex',
        //  flexDirection: 'column',
        backgroundColor: '#1E1E1E',
    },
    content: {
        position: 'relative',
        width: "100%",
        height: '50vh',
        display: 'flex',
        marginRight: "10%"
    },
    inputContainer: {
        width: '100%',
        height: "25vh",
        paddingLeft: '60px',
        backgroundColor: '#1E1E1E',
        overflowY: 'auto',
        marginRight: "20%"
    },
    graphContainer: {
        width: '50%', // Adjust the width as needed
        height: '30vh', // Adjust the height as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:"5%"
    },
    textContainer: {
        width: '60%', // Adjust the width as needed
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
      //  alignItems: 'center',
        color: 'white',
        fontSize: '18px',
        lineHeight: '1.6',
        whiteSpace: 'pre-wrap',
        marginTop:"5%"
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
