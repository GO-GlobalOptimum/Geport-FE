import React, { useState, useEffect } from 'react';
import {useNavigate, useNavigation} from "react-router-dom";

export function UserInfo1({ nextPage }) {
    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.container2}></div>
                <div style={styles.container3}>
                    <span style={styles.title}>
                        마지막 단계입니다.<br/> 당신의 기본 정보를 알려주세요.
                    </span>
                </div>
                <div style={styles.container3}>
                    <span style={styles.subtitle}>
                        이름, 성격, 나이 ,이름, 성격, 나이, 성별, 전화번호 등 Geport에 들어갈 5가지 기본 정보를 입력해주세요.<br/>
                        모두 작성하신 후 Geport가 완성되면 Geport를 열람할 수 있는 히든코드를 기재해주신 전화번호로 전달드립니다.
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
        height:"10vh",
        display:'flex',
        flexDirection:'column',
        overflow:"hidden",
        margin:"0.1vh"
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