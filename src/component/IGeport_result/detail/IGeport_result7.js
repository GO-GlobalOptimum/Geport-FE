import React, {useEffect, useState} from 'react';
import {getCookie} from "../../../function/cookies";
import { get_api } from "./IGeport_result1";
export function IGeport_result7({ nextPage }) {
    const name = getCookie('username');
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await get_api();
                if (response && response.data && response.data.length > 0) {
                    // 데이터베이스에서 받아온 데이터의 첫 번째 인덱스 사용
                    setUserData(response.data[0].result.blogs_finalReport);
                } else {
                    console.error('데이터를 받지 못했습니다');
                }
            } catch (error) {
                console.error("사용자 데이터를 가져오는 중 오류가 발생했습니다:", error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.container2}></div>
                <div style={styles.container3}>
                    <span style={styles.title}>{name} 님의 <br/>IGeport 퍼스널 브랜딩 솔루션은</span>
                </div>
                <div style={styles.container7}>
                    <div style={styles.inputContainer}>
                        <div>
                            <span style={styles.text}>
                                <span style ={styles.innerTitle}> {name} 의 IGeport Summary </span> <br/><br/>
                                {userData.summary};
                                <br/><br/>
                                <span style = {styles.innerTitle}>{name} 의 IGeport Solution </span><br/> <br/>
                                {userData.advice};
                            </span>
                        </div>
                    </div>
                    <div style={styles.pageCount}></div>
                </div>
                <div style={styles.container4}>
                    <button
                        style={styles.button}
                        onClick={nextPage}
                    >
                        IGeport 다운받기
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
    container3: { // 문구 입력창
        position: "relative",
        width: "100%",
        height: "11.5vh", // 높이 증가
        display: 'flex',
        flexDirection: 'column',
        overflow: "hidden",
        margin: "1%",
        justifyContent: "center", // 내용물 중앙 정렬
    },
    title: {
        paddingLeft: '50px',
        fontWeight: '600',
        color: 'white',
        fontSize: '28px', // 글자 크기를 조금 줄여 공간 확보
        paddingTop: '10px', // 제목 상단에 약간의 패딩 추가
    },
    inputContainer: {
        width: '100%',
        paddingLeft: '60px',
        backgroundColor: '#1E1E1H',
        overflowY: 'auto',
        marginRight:"3%",
        maxHeight: '60vh', // 최대 높이 설정
        scrollbarWidth: 'thin', // 스크롤바 너비 설정 (thin, none, auto)
        scrollbarColor: '#1AE57C #1E1E1E' // 스크롤바 색상 설정 (스크롤바 색상 및 배경)
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
        width: '15vw',
        height: '5vh',
        backgroundColor: '#1AE57C',
        color: 'black',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '22px',
        fontWeight: '600'
    },
    text:{
        color: "white",
        fontSize: "18px",
        lineHeight: "160%",
    },
    innerTitle : {
        color : "#1AE57C",
        fontSize : "22px",
        fontWeight:"500"
    }
};
