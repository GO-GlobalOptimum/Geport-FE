import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { evaluate } from 'mathjs';
import { getCookie } from "../../../function/cookies";
import { get_api } from "./Geport_result1";
import { useNavigate } from "react-router-dom";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartDataLabels);

export function Geport_result6({ nextPage }) {
    const [userData, setUserData] = useState(JSON.parse(JSON.parse(localStorage.getItem('result')).result.answer_4));
    const navigate = useNavigate();

    console.log(userData);
    const name = "유현우";

    // Dynamic data generation based on the equation
    const generateChartData = (equation) => {
        const xValues = Array.from({ length: 10 }, (_, i) => i); // Generate X values from 0 to 9
        const yValues = xValues.map(x => evaluate(equation.replace(/x/g, `(${x})`))); // Evaluate Y values from the equation
        return yValues;
    };

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
                    text: 'X Axis',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Y Axis',
                },
                beginAtZero: true,
            },
        },
    };

    const lineChartData = {
        labels: Array.from({ length: 10 }, (_, i) => i),
        datasets: [
            {
                label: 'Model Output',
                data: userData ? generateChartData(userData.equation) : [],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                fill: false,
            },
        ],
    };

    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.container2}></div>
                <div style={styles.container3}>
                    <span style={styles.title}>{name} 님의 삶을 그래프로 표현했어요.</span>
                </div>
                <div style={styles.container7}>
                    <div style={styles.content}>
                        <div style={styles.graphContainer}>
                            <Line data={lineChartData} options={lineChartOptions} />
                        </div>
                        <div style={styles.inputContainer}>
                                    <span style={styles.text}>
                                        {userData.explanation}
                                    </span>
                        </div>
                    </div>
                </div>
                <div style={styles.container4}>
                    <button style={styles.button} onClick={nextPage}>
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
        alignItems:"center",
        justifyContent:"center"
    },content:{
        position:'relative',
        width:"100%",
        height:'50vh',
        display:'flex',
        flexDirection:'column',
        marginRight:"10%",
    }
    ,
    inputContainer: {
        width: '100%',
        height:"25vh",
        paddingLeft: '60px',
        backgroundColor: '#1E1E1E',
        overflowY: 'auto',
        marginRight:"20%",
        color:"white",
        lineHeight: "160%",
        fontSize:"20px"
    },graphContainer: {
        width: '50%', // Adjust the width as needed
        height: '30vh', // Adjust the height as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
        color: "white",
        fontSize: "18px",
        lineHeight: "160%",
    }
};
