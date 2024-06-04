import React, { useEffect, useRef, useState } from 'react';
import WordCloud from 'wordcloud';
import axios from 'axios';
import { getCookie } from "../../../function/cookies";
import { get_api } from "./IGeport_result1";

export function IGeport_result6({ nextPage }) {
    const wordCloudRef = useRef(null);
    const name = getCookie('username');
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        axios.get('/BE/fastapi/igeport/database/list')
            .then(response => {
                if (response && response.data && response.data.length > 0) {
                    // Set the entire object containing happy keywords and scores
                    setUserData(response.data[0].result.blogs_happyKeyword.happy_keyword);
                } else {
                    console.error('No data received');
                }
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
            });
    }, []);

    useEffect(() => {
        if (userData) {
            const colors = ['#1AE57C', '#1BD48C', '#1CC39C', '#1DB2AC', '#1EA1BC'];  // Define a list of colors
            let colorIndex = 0;


            // Create an array of [word, score] pairs
            const words = Object.entries(userData).map(([key, value]) => [key.toUpperCase(), Math.round(value)]);

            // Ensure that canvas is big enough or properly sized
            wordCloudRef.current.width = 500;
            wordCloudRef.current.height = 500;

            // Generate the word cloud
            WordCloud(wordCloudRef.current, {
                list: words,
                gridSize: 8,
                weightFactor: (size) => Math.round(size * 1.5),
                color: () => {
                    const color = colors[colorIndex % colors.length];  // Cycle through colors array
                    colorIndex++;  // Move to the next color
                    return color;
                },
                backgroundColor: '#1E1E1E',
                rotateRatio: 0,
                rotationSteps: 2,
            });
        }
    }, [userData]);

    if (!userData) {
        return <div>Loading...</div>;
    }


return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.container2}></div>
                <div style={styles.container3}>
                    <span style={styles.title}>이 기간 동안 {name} 님을<br />행복하게 만든 것을 모아봤어요</span>
                </div>
                <div style={styles.container7}>
                    <div style={styles.content}>
                        <div style={styles.wordCloudContainer}>
                            <canvas ref={wordCloudRef} style={styles.canvas}></canvas>
                        </div>
                    </div>
                    <div style={styles.pageCount}>
                        <svg width="10" height="180" viewBox="0 0 10 180" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" transform="rotate(90 5 5)" fill="#C6C6C6"/>
                            <circle cx="5" cy="39" r="5" transform="rotate(90 5 39)" fill="#C6C6C6"/>
                            <circle cx="5" cy="73" r="5" transform="rotate(90 5 73)" fill="#C6C6C6"/>
                            <circle cx="5" cy="107" r="5" transform="rotate(90 5 107)" fill="#1AE57C"/>
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
        height:"10vh",
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
        backgroundColor: '#1E1E1E',
    },
    content: {
        position: 'relative',
        width: "100%",
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: "10%"
    },
    wordCloudContainer: {
        width: '50%', // Adjust the width as needed
        height: '100%', // Adjust the height as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    canvas: {
        width: '100%',
        height: '100%',
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
