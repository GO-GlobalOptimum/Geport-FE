import React from 'react';
import { useNavigate } from "react-router-dom";
import { Line, Bar, Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, BubbleController, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, BubbleController, Title, Tooltip, Legend, ChartDataLabels);

export function StatisticsPage(props) {
    const navigate = useNavigate();

    const logoClick = () => {
        navigate("/");
    }

    const lineChartData = {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [
            {
                label: '전체 클릭수',
                data: [50, 75, 50, 25, 75, 50, 25, 50, 75],
                borderColor: 'black',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                fill: false,
            },
        ],
    };

    const barChartData = {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [
            {
                label: '태그별 조회수',
                data: [20, 90, 55, 40, 80, 15, 60, 50, 85],
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 1,
            },
        ],
    };

    const bubbleChartData = {
        datasets: [
            {
                data: [
                    { x: 10, y: 20, r: 100, label: '#과학/기술' },
                  //  { x: 15, y: 10, r: 10, label: '#음악' },
                    { x: 20, y: 30, r: 30, label: '#인턴' },
                    { x: 25, y: 25, r: 55, label: '#락밴드' },
                    { x: 30, y: 20, r: 20, label: '#커리어' },
                    { x: 35, y: 25, r: 10, label: '#요리' },
                    { x: 40, y: 35, r: 15, label: '#여행' },
                    { x: 45, y: 30, r: 80, label: '#일상' },
                    { x: 50, y: 25, r: 10, label: '#힐링' },
                    { x: 55, y: 35, r: 20, label: '#영화' },
                ],
                backgroundColor: function(context) {
                    const value = context.raw.r;
                    return `rgba(75, 192, 192, ${value / 10})`;
                },
                borderColor: 'rgba(75, 192, 192, 78)',
            },
        ],
    };

    const lineChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: '전체 클릭수',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'X Axis Label',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Y Axis Label',
                },
                beginAtZero: true,
            },
        },
    };

    const barChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: '태그별 조회수',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'X Axis Label',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Y Axis Label',
                },
                beginAtZero: true,
            },
        },
    };

    const bubbleChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: '내가 본 게시물별 태그',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.raw.label;
                        return `${label}: (${context.raw.x}, ${context.raw.y}, ${context.raw.r})`;
                    },
                },
            },
            datalabels: {
                anchor: 'center',
                align: 'center',
                color: 'black',
                formatter: function(value, context) {
                    return value.label;
                }
            }
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
                beginAtZero: true,
            },
        },
    };

    const userTypes = [
        { label: '#기술적인', rank: 1 },
        { label: '#야구팬', rank: 2 },
        { label: '#음식/요리', rank: 3 },
        { label: '#여행을 좋아하는', rank: 4 },
        { label: '#시네필', rank: 5 },
    ];

    const getColorAndSize = (rank) => {
        const size = 30 - rank * 5;
        const color = `rgba(0, 0, 0, ${0.1 + (5 - rank) * 0.2})`;
        return { fontSize: `${size}px`, color };
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <div style={styles.logoSearchContainer}>
                    <img src={"./image/Logo.png"} style={styles.logo} onClick={logoClick} />
                    <div style={styles.searchContainer}>
                        <img src={"./image/search.png"} alt="Search" style={styles.searchIcon} />
                        <input type="text" placeholder="검색어를 입력하세요" style={styles.searchInput} />
                    </div>
                </div>
                <div style={styles.notificationContainer}>
                    <img src="./image/notification.png" alt="notification" style={styles.icon} />
                    <img src="./image/user.png" alt="user" style={styles.icon} />
                </div>
            </div>
            <div style={styles.content}>
                <div style={styles.chartContainer}>
                    <h3 style={styles.chartTitle}>전체 클릭수</h3>
                    <Line data={lineChartData} options={lineChartOptions} />
                </div>
                <div style={styles.chartContainer}>
                    <h3 style={styles.chartTitle}>태그별 조회수</h3>
                    <Bar data={barChartData} options={barChartOptions} />
                </div>
                <div style={styles.chartContainer}>
                    <h3 style={styles.chartTitle}>내가 본 게시물별 태그</h3>
                    <Bubble data={bubbleChartData} options={bubbleChartOptions} />
                </div>
                <div style={styles.chartContainer}>
                    <h3 style={styles.chartTitle}>내 게시물을 많이 본 사람의 유형</h3>
                    <div style={styles.userTypeList}>
                        {userTypes.map((type, index) => {
                            const { fontSize, color } = getColorAndSize(type.rank);
                            return (
                                <p key={index} style={{ fontSize, color }}>
                                    {type.rank}위  {type.label}
                                </p>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '10vh', // 10% of the viewport height
        padding: '10px',
    },
    content: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: '10px',
        width: '100%',
        height: '90vh', // 90% of the viewport height
        padding: '10px',
    },
    chartContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        padding: '20px',
    },
    chartTitle: {
        marginBottom: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    userTypeList: {
        textAlign: 'left',
        fontSize: '18px',
        lineHeight: '1.5',
        color: '#2e2e2e',
    },
    logoSearchContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        marginRight: '10px',
        width: '150px',
        height: '30px',
        padding: '1%',
        cursor: 'pointer',
        borderRadius: '5px',
    },
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ccc',
        borderRadius: '50px',
        border: '1px solid #ccc',
        padding: '5px',
        height: '30px',
        flex: 1,
    },
    searchIcon: {
        marginRight: '5px',
        width: '20px',
        height: '20px',
        cursor: 'pointer',
    },
    searchInput: {
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        flex: 1,
        height: '100%',
    },
    notificationContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        width: '20px',
        height: '20px',
        marginRight: '20px',
    },
};
