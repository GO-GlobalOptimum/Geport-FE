import React, { useState } from 'react';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

export function IGeport_result4({ nextPage }) {
    const [name, setName] = useState(''); // 사용자 이름을 저장하는 상태

    const barChartOptions = {
        indexAxis: 'y', // Y축으로 가로 바 그래프를 그립니다.
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
                    color: 'white', // X축 레이블 색상
                },
                grid: {
                    color: '#444' // 그리드 라인 색상
                }
            },
            y: {
                title: {
                    display: false,
                },
                ticks: {
                    color: 'white', // Y축 레이블 색상
                },
                grid: {
                    color: '#444' // 그리드 라인 색상
                }
            },
        },
    };

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const barChartData = {
        labels: ['스트레스', '불안', '슬픔', '피로'],
        datasets: [
            {
                label: '부정적 감정 상태',
                data: [80, 60, 40, 100],
                backgroundColor: 'rgba(26, 229, 124, 0.5)', // 바 색상
                borderColor: '#1AE57C',
                borderWidth: 1,
            },
        ],
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
                                <span style={styles.text}>
                                    이 그래프는 {name} 님의 부정적 감정 상태를 나타냅니다.
                                    스트레스, 불안, 슬픔, 피로와 같은 감정들이 정상 범위 기준선인 200점 아래이며,
                                    이는 여행이 {name} 님께 긍정적인 영향을 미쳤음을 시사합니다.
                                </span>
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
