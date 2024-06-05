import React, {useEffect, useState} from 'react';
import {getCookie} from "../../../function/cookies";
import { get_api } from "./Geport_result1";
import {useNavigate} from "react-router-dom";
export function Geport_result5({ nextPage }) {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    const name = getCookie('username');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await get_api();
                if (response && response.data && response.data.length > 0) {
                    setUserData(response.data[0]);  // 첫 번째 데이터만 저장
                } else {
                    console.error('No data received');
                }
            } catch (error) {
                console.error("There was an error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);
    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.container2}></div>
                <div style={styles.container3}>
                    <span style={styles.title}>{name} 님의 인생의 터닝포인트는 이때였어요.</span>
                </div>
                <div style={styles.container7}>
                    <div style={styles.inputContainer}>
                        {userData && userData.result && userData.result.answer_3 && (
                            <div>
                                <span style={styles.text}>
                                    {JSON.parse(userData.result.answer_3).answer}
                                </span>
                            </div>
                        )}
                    </div>
                    <div style={styles.pageCount}>
                        <svg width="10" height="146" viewBox="0 0 10 146" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" transform="rotate(90 5 5)" fill="#C6C6C6"/>
                            <circle cx="5" cy="39" r="5" transform="rotate(90 5 39)" fill="#C6C6C6"/>
                            <circle cx="5" cy="73" r="5" transform="rotate(90 5 73)" fill="#1AE57C"/>
                            <circle cx="5" cy="107" r="5" transform="rotate(90 5 107)" fill="#C6C6C6"/>
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
    inputContainer: {
        width: '100%',
        paddingLeft: '60px',
        backgroundColor: '#1E1E1E',
        overflowY: 'auto',
        marginRight:"3%"
    },
    input: {
        width: '92%',
        paddingTop: '1.5%',
        height: '220px', // Increased height
        paddingLeft: '25px',
        fontSize: '1.2rem', // Increased font size
        color: '#C6C6C6',
        backgroundColor: '#333',
        border: 'none',
        borderRadius: '24px',
        padding: '20px', // Added padding
        overflowY: 'auto', // Enable vertical scrolling
        whiteSpace: 'pre-wrap', // Ensure text wraps within the input box
        resize: 'none' // Prevent manual resizing
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
        height: '28vh',
        display: 'flex',
        backgroundColor: '#1E1E1E',
    },
    pageCount: {
        position: 'relative',
        width: '',
        height: '28vh',
        display: 'flex',
        backgroundColor: '#1E1E1E'
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
