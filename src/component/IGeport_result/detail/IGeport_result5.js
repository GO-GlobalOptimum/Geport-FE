import React, { useState } from 'react';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement, ChartDataLabels);

export function IGeport_result5({ nextPage }) {
    const pieChartData = {
        labels: ['개방성', '성실성', '외향성', '우호성', '섬세함'],
        datasets: [
            {
                data: [20, 30, 15, 25, 10], // 예시 데이터
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
                                조태완 님은 개방적이고, 성실하고, 외향적이고, 우호적이며, 섬세합니다.<br/>
                                이 중 가장 두드러지는 특성은 우호성입니다.<br/><br/>
                                조태완 님은 새로운 아이디어에 대한 수용성이 높습니다.<br/>
                                조태완 님의 성실성은 평균 정도로 나타나는데, 이는 계획적이고 체계적인 접근을 선호하지만 때로는 융통성을 발휘할 수 있음을 의미합니다.<br/>
                                조태완 님은 외향적입니다. 다른 사람과 어울리는 것을 즐기고 활동적인 여행을 선호하는 것으로 보입니다.<br/>
                                조태완 님의 친화성 점수는 높은 편으로, 작성자가 타인과 잘 어울리며 협력적인 성향을 가졌습니다.
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
        width: '90%',
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
