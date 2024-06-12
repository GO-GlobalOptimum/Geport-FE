import React, {useEffect, useState} from 'react';
import {get_api} from "./Geport_result1";
import {getCookie} from "../../../function/cookies";
import {useNavigate} from "react-router-dom";

export function Geport_result7({ nextPage }) {
    const [userData, setUserData] = useState(JSON.parse(JSON.parse(localStorage.getItem('result')).result.answer_5));
    const navigate = useNavigate();

    console.log(userData);
    const name = "유현우";

    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.container2}></div>
                <div style={styles.container3}>
                    <span style={styles.title}>{name} 님의 <br/>Geport 퍼스널 브랜딩 솔루션은</span>
                </div>
                <div style={styles.container7}>
                    <div style={styles.inputContainer}>

                                <span style={styles.text}>
                                    {userData.answer}
                                </span>
                    </div>
                    <div style={styles.pageCount}>
                    </div>
                </div>
                <div style={styles.container4}>
                    <button
                        style={styles.button}
                        onClick={nextPage} // 버튼 클릭 시 nextPage 호출
                    >
                        메인으로
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
    container2 : { // 문구 입력 컨테이너
        position:"relative",
        width: "100%",
        height:"20vh",
        display:'flex',
        flexDirection:'column',
        overflow:"hidden",
    },
    container3 : { // 문구 입력창
        position:"relative",
        width: "100%",
        height:"15vh",
        display:'flex',
        flexDirection:'column',
        overflow:"hidden",
        margin:"0.1vh"
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
        marginRight:"3%",
        color:"white",
        lineHeight: "160%",
        fontSize:"20px"
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
        marginTop:"3%",
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
        height: '7vh',
        backgroundColor: '#1AE57C',
        color: 'black',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '20px',
        fontWeight: '600'
    },
    text:{
        color: "white",
        fontSize: "18px",
        lineHeight: "160%",
    }

};
