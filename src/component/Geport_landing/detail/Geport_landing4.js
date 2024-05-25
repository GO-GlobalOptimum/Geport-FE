import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Geport_landing4({ nextPage }) {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate(-1); // This will navigate to the previous page
    };
    const handleGeport = () => {
      navigate('/geport') ;
    };

    const handleIGeport= ()=>{
        navigate('/igeport');
    };
    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.container2}></div>
                <div style={styles.container3}>
                    <div style={styles.container4}>
                        <div style={styles.mini1}>
                            <img src="./image/geport_logo.png" alt="Geport Logo" style={styles.logo} />
                        </div>
                        <div style={styles.mini2}>
                            <button style={styles.button} onClick={handleGeport}>
                                Geport 만들기
                            </button>
                            <button style={styles.button} onClick={handleIGeport}>
                                iGeport 만들기
                            </button>
                            <button style={styles.button1} onClick={handleCancel}>
                                취소하기
                            </button>
                        </div>
                    </div>
                    <div style={styles.container5}>
                        <div style={styles.word1}>
                            <span style={styles.inputText}>
                                원하는 AI 보고서를 선택해주세요.
                            </span>
                        </div>
                        <div style={styles.word2}>
                            <span style={styles.text}> Geport는 블로그 브랜딩 전문...iGeport는 나를 더 잘 알 수 있는...
                            </span>
                        </div>
                        <div style={styles.word3}>
                            // 여기에도 같은 위치에 버튼
                        </div>
                    </div>
                    <div style={styles.container6}>
                        <svg width="10" height="110" viewBox="0 0 10 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" transform="rotate(90 5 5)" fill="#C6C6C6" />
                            <circle cx="5" cy="55" r="5" transform="rotate(90 5 55)" fill="#C6C6C6" />
                            <circle cx="5" cy="105" r="5" transform="rotate(90 5 105)" fill="#1AE57C" />
                        </svg>
                    </div>
                </div>
                <div style={styles.container2}></div>
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
        overflow: "hidden"
    },
    container1: {
        position: "relative",
        width: "75%",
        height: "100vh",
        display: 'flex',
        flexDirection: 'column',
        overflow: "hidden",
    },
    container2: {
        position: "relative",
        width: "100%",
        height: "20vh",
        backgroundColor: '#1E1E1E',
        display: 'flex',
        flexDirection: 'column',
        overflow: "hidden",
    },
    container3: {
        position: "relative",
        width: "100%",
        height: "60vh",
        backgroundColor: "#1E1E1E",
        display: 'flex',
        flexDirection: 'row', // Set flex direction to row
        overflow: "hidden",
    },
    container4: {
        position: "relative",
        width: "20%",
        height: "100%",
        backgroundColor: '#1E1E1E',
        display: 'flex',
        flexDirection: 'column',
        overflow: "hidden",
        justifyContent: 'space-between', // Ensures even spacing between mini1 and mini2
    },
    container5: {
        position: "relative",
        width: "70%",
        height: "100%",
        backgroundColor: "#1E1E1E",
        display: 'flex',
        overflow: "hidden",
        flexDirection: 'column',
    },
    container6: {
        marginTop: "15%",
        position: "relative",
        width: "10%",
        height: "85%",
        backgroundColor: "#1E1E1E",
        display: 'flex',
        flexDirection: 'column',
        overflow: "hidden",
        alignItems: "center"
    },
    word1: {
        position: "relative",
        width: "100%",
        height: "30%",
        backgroundColor: '#1E1E1E',
        display: 'flex',
        flexDirection: 'column',
        overflow: "hidden",

    },
    word2: {
        position: "relative",
        width: "100%",
        height: "40%",
        backgroundColor: '#1E1E1E',
        display: 'flex',
        flexDirection: 'column',
        overflowY: "auto"
    },
    word3: {
        position: "relative",
        width: "100%",
        height: "40%",
        backgroundColor: '#1E1E1E',
        display: 'flex',
        flexDirection: 'column',
        overflow: "hidden"
    },
    mini1: {
        width: "100%",
        height: "60%",
        backgroundColor: "#1E1E1E",
        display: 'flex',
        alignItems: 'center', // Centers the logo vertically
        justifyContent: 'center', // Centers the logo horizontally
    },
    mini2: {
        width: "90%",
        height: "40%",
        backgroundColor: "#1E1E1E",
        marginLeft: "15%",
        marginRight: "15%",
        marginBottom: "15%",
        marginTop: "50%"
    },
    logo: {
        width: '220px',  // Adjust as needed
        height: '220px',  // Adjust as needed
    },
    button: {
        width: '11vw',
        height: '6.5vh',
        backgroundColor: '#1E1E1E',
        color: '#1AE57C',
        border: '3px solid #1AE57C',
        borderBlockColor:"#1AE57C",
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '26px',
        fontWeight: "600",
        marginBottom: "3%",
        marginTop:"3%"
    },
    button1: {
        width: '11vw',
        height: '6.5vh',
        backgroundColor: "#1E1E1E",
        color: 'white',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '24px',
        fontWeight: "300"
    },
    inputText: { margin: "5.5%", fontSize: '2.5rem', color: "white", fontWeight: "500" }
    , text: { margin: "5.5%", fontSize: '1.5rem', color: "white", fontWeight: "300" }
};
