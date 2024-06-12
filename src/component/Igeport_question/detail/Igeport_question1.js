import React, { useState, useEffect } from 'react';
import {useNavigate, useNavigation} from "react-router-dom";

export function Igeport_question1({ nextPage }) {
    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.container2}></div>
                <div style={styles.container3}>
                    <span style={styles.title}>
                        다음 질문은 당신의 성향을 파악하기 위한 질문입니다.
                    </span>
                </div>
                <div style={styles.container3}>
                    <span style={styles.subtitle}>
                        다음 질문의 답변과 첨부해주신 블로그의 내용을 바탕으로 iGeport를 작성합니다.
                        <br/> 제시해드리는 선지 중 자신과 가장 가까운 것을 선택해주세요.
                    </span>
                </div>
                <div style={styles.container4}>
                    <button style={styles.button} onClick={()=>{nextPage('')}}>
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
        height:"15vh",
        display:'flex',
        flexDirection:'column',
        overflow:"hidden",
    },
    container3 : { // 문구 입력창
        position:"relative",
        width: "100%",
        height:"7.5vh",
        display:'flex',
        flexDirection:'column',
        overflow:"hidden",
        margin:"1%"
    },
    title: {
        paddingLeft: '50px',
        fontWeight: "600",
        color:"white",
        fontSize:"32px"
    },
    subtitle: {
        paddingLeft: '50px',
        fontWeight:"600",
        color:"#C6C6C6",
        fontSize:"20px",
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