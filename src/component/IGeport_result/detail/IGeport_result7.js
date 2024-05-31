import React, { useState } from 'react';

export function IGeport_result7({ nextPage }) {

    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.container2}></div>
                <div style={styles.container3}>
                    <span style={styles.title}>조태완 님의 <br/>IGeport 퍼스널 브랜딩 솔루션은</span>
                </div>
                <div style={styles.container7}>
                    <div style={styles.inputContainer}>
                        <div>
                            <span style={styles.text}>
                                당신은 사용자들에게 최고의 정보를 전달하기 위해 끊임없이 공부하고 발전하는 사업가입니다.
                                당신은 초기에 겪은 어려움을 극복하며, 끊임없이 문제를 해결하고 서비스를 개선하는 데 최선을 다합니다.
                                이러한 강점을 블로그에 녹여 변화를 이끄는 도전정신과 성장하고자 하는 열망을 중심으로 기술 블로그를 운영하는 것을 추천합니다.
                                함께 더 나은 미래를 만들어나가는 것을 선호하는 당신은 리더십과 열정을 보여줄 수 있는 게시글을 적는 것이 적합합니다.
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
    }
};
