import React, { useState, useEffect } from 'react';
import {useNavigate, useNavigation} from "react-router-dom";

export function Geport_result2({ nextPage }) {
    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.container2}></div>
                <div style={styles.container3}>
                    <span style={styles.title}>
                        (소개글 한 문장), <br/>Username 님의 Geport
                    </span>
                </div>
                <div style={styles.container3}>
                    <span style={styles.subtitle}>
                        Username 님의 블로그와 답변을 바탕으로 퍼스널 브랜딩에 필요한 보고서를 준비했어요.
                    </span>
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
        position: 'relative',  // Needed for absolute positioning of children
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
        overflow:"hidden",
    },
    container2 : { // 문구 입력 컨테이너
        position:"relative",
        width: "100%",
        height:"25vh",
        display:'flex',
        flexDirection:'column',
        overflow:"hidden",
    },
    container3 : { // 문구 입력창
        position:"relative",
        width: "100%",
        height:"12vh",
        display:'flex',
        flexDirection:'column',
        overflow:"hidden",
        margin:"0.1vh"
    },
    title: {
        paddingLeft: '50px',
        fontWeight: "600",
        color:"white",
        fontSize:"30px"
    },
    subtitle: {
        paddingLeft: '50px',
        fontWeight:"600",
        color:"#C6C6C6",
        fontSize:"22px",
        paddingTop:"2%"
    },
    container4: {
        position:"relative",
        width:"100%",
        height:"15vh", display:"flex",
        color:"black", fontSize:"23px",
        fontWeight:"300",
        paddingTop:"60px",
        paddingLeft:"60px"
    },
    button: {
        width: '10vw',
        height :'5vh',
        backgroundColor: '#1AE57C',
        color: 'black',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '24px',
        fontWeight:"600"

    }

}