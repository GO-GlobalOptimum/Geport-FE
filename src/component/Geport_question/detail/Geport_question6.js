import React, { useState, useEffect } from 'react';
import { getCookie, setCookie } from "../../../function/cookies";

export function Geport_question6({ nextPage }) {
    const [answer, setAnswer] = useState('');

    // Load saved answer from the cookie when the component mounts
    useEffect(() => {
        const savedAnswer = getCookie('geport_answer6');
        if (savedAnswer) {
            setAnswer(savedAnswer);
        }
    }, []);

    const handleInputChange = (event) => {
        setAnswer(event.target.value);
    };

    const handleNext = () => {
        nextPage(answer);
    };

    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.container2}></div>
                <div style={styles.container3}>
                    <span style={styles.title}>인생의 변곡점은 무엇인가요? 힘들었지만 극복했던 경험을 알려주세요</span>
                </div>
                <div style={styles.container3}>
                    <span style={styles.subtitle}>
                        답변이 블로그에 작성된 내용과 일치할 필요는 없습니다. 자유롭게 작성해주세요.
                    </span>
                </div>
                <div style={styles.container7}>
                    <div style={styles.inputContainer}>
                        <textarea
                            value={answer}
                            onChange={handleInputChange}
                            placeholder={'대학교 2학년 때, 학교 생활에 흥미를 느끼지 못하고 많이 방황했던 경험이 있습니다. \n 하지만 서비스를 제작하는 과제를 진행하면서 몇날 며칠 밤을 세워가며 프로젝트를 완성했고, 그 결과로 성공적으로 프로젝트를 마무리했습니다.\n 이 과정 덕분에 학교 생활에 대한 흥미를 되찾았습니다.'}
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.pageCount}>
                        <svg width="10" height="210" viewBox="0 0 10 210" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" transform="rotate(90 5 5)" fill="#C6C6C6"/>
                            <circle cx="5" cy="55" r="5" transform="rotate(90 5 55)" fill="#C6C6C6"/>
                            <circle cx="5" cy="105" r="5" transform="rotate(90 5 105)" fill="#C6C6C6"/>
                            <circle cx="5" cy="155" r="5" transform="rotate(90 5 155)" fill="#C6C6C6"/>
                            <circle cx="5" cy="205" r="5" transform="rotate(90 5 205)" fill="#1AE57C"/>
                        </svg>
                    </div>
                </div>
                <div style={styles.container4}>
                    <button
                        style={{
                            ...styles.button,
                            backgroundColor: answer.trim() ? '#1AE57C' : '#525252' // 이름이 있을 때만 버튼 색상 변경
                        }}
                        onClick={handleNext} // 버튼 클릭 시 입력된 이름이 있으면 nextPage 호출
                        disabled={!answer.trim()} // 이름이 없을 때 버튼 비활성화
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
    container3: {
        position: 'relative',
        width: '100%',
        height: '7.5vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        margin: '1%'
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
        overflowY: 'auto'
    },
    input: {
        width: '92%',
        paddingTop: '1.5%',
        height: '220px',
        paddingLeft: '25px',
        fontSize: '1.2rem',
        color: '#C6C6C6',
        backgroundColor: '#333',
        border: 'none',
        borderRadius: '24px',
        padding: '20px',
        overflowY: 'auto',
        whiteSpace: 'pre-wrap',
        resize: 'none'
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
        backgroundColor: '#525252',
        color: 'black',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '24px',
        fontWeight: '600'
    }
};
