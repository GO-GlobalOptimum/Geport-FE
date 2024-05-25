import React, { useState } from 'react';
import {Line} from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, BubbleController, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, BubbleController, Title, Tooltip, Legend, ChartDataLabels);

export function Geport_result6({ nextPage }) {
    const [name, setName] = useState(''); // 사용자 이름을 저장하는 상태

    const lineChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'X',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Y',
                },
                beginAtZero: true,
            },
        },
    };

    const handleInputChange = (event) => {
        setName(event.target.value);
    };
    const lineChartData = {
        labels: [0, 1, 2, 3, 4, 5, 6, 7],
        datasets: [
            {
                label: '전체 클릭수',
                data: [50, 75, 50, 25, 75, 50, 25, 50],
                borderColor: 'white',
             //   backgroundColor: 'rgba(0, 0, 0, 0.1)',
                fill: false,
            },
        ],
    };
    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.container2}></div>
                <div style={styles.container3}>
                    <span style={styles.title}>조태완 님의 삶을 그래프로 표현했어요.</span>
                </div>
                <div style={styles.container7}>
                    <div style={styles.content}>
                        <div style={styles.graphContainer}>
                            <h3 style={styles.chartTitle}>전체 클릭수</h3>
                            <Line data={lineChartData} options={lineChartOptions}/></div>
                        <div style={styles.inputContainer}>
                            <div>
                                <span style={styles.text}>
                                    Lorem ipsum dolor sit amet consectetur. Amet pharetra consequat diam nunc eget accumsan fermentum enim quam.
                                    Convallis scelerisque pellentesque mi commodo in.
                                    Nulla nunc cursus ullamcorper amet aliquam diam turpis tempus nunc. Faucibus venenatis neque morbi amet leo diam.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div style={styles.pageCount}>
                        <svg width="10" height="146" viewBox="0 0 10 146" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" transform="rotate(90 5 5)" fill="#C6C6C6"/>
                            <circle cx="5" cy="39" r="5" transform="rotate(90 5 39)" fill="#C6C6C6"/>
                            <circle cx="5" cy="73" r="5" transform="rotate(90 5 73)" fill="#C6C6C6"/>
                            <circle cx="5" cy="107" r="5" transform="rotate(90 5 107)" fill="#1AE57C"/>
                            <circle cx="5" cy="141" r="5" transform="rotate(90 5 141)" fill="#C6C6C6"/>
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
        marginRight:"20%"
    },graphContainer: {
        width: '50%', // Adjust the width as needed
        height: '30vh', // Adjust the height as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageCount: {
        position: 'relative',
        width: '',
        height: '28vh',
        display: 'flex',
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
        color:"white",
        fontSize:"18px"
    }
};
