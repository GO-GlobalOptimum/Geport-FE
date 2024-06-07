import React, { useEffect, useState } from 'react';
import { getCookie, setCookie } from "../../../function/cookies";

const radioButtonHeight = 80; // 라디오 버튼 하나의 높이 (픽셀 단위)

export function Igeport_question3({ nextPage }) {

    const options = [
        '나는 목표를 달성하기 위해 노력하고, 포기하지 않는다.',
        '나는 업무나 과제를 미루는 경향이 있다.'
    ];

    const [selectedOption, setSelectedOption] = useState('');

    // Load saved selected option from the cookie when the component mounts
    useEffect(() => {
        const savedOption = getCookie('Igeport_selectedOption3');
        if (savedOption) {
            setSelectedOption(savedOption);
        }
    }, []);

    const handleRadioChange = (value) => {
        setSelectedOption(value);
        setCookie('Igeport_selectedOption3', value, { path: '/' }); // 저장 위치와 경로
    };

    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.container2}></div>
                <div style={styles.container3}>
                    <span style={styles.title}>다음 중 자신과 가장 가까운 것을 선택해주세요.</span>
                </div>
                <div style={styles.container3}>
                    <span style={styles.subtitle}>
                        iGeport는 당신의 심리를 심층적으로 분석합니다.<br/>
                        몇 가지 질문에 대답해주세요.
                    </span>
                </div>
                <div style={styles.container5}>
                    <div style={styles.radioStyle}>
                        <span style={styles.inputText}>
                            {options.map((option, index) => (
                                <label key={index}
                                       style={styles.labelStyle}>
                                    <input type="radio" name="myRadioGroup" value={option} checked={selectedOption === option}
                                           onChange={() => handleRadioChange(option)}
                                           style={styles.inputStyle}
                                    />
                                    {option}
                                </label>
                            ))}
                        </span>
                    </div>
                    <div style={styles.container6}>
                        <svg width="10" height="210" viewBox="0 0 10 210" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" transform="rotate(90 5 5)" fill="#C6C6C6"/>
                            <circle cx="5" cy="55" r="5" transform="rotate(90 5 55)" fill="#1AE57C"/>
                            <circle cx="5" cy="105" r="5" transform="rotate(90 5 105)" fill="#C6C6C6"/>
                            <circle cx="5" cy="155" r="5" transform="rotate(90 5 155)" fill="#C6C6C6"/>
                            <circle cx="5" cy="205" r="5" transform="rotate(90 5 205)" fill="#C6C6C6"/>
                        </svg>
                    </div>
                </div>
                <div style={styles.container4}>
                    <button style={{
                        ...styles.button,
                        backgroundColor: selectedOption ? '#1AE57C' : '#525252' // 선택된 옵션이 있으면 버튼을 활성화
                    }} onClick={() => {
                        if (selectedOption) {
                            nextPage();
                        }
                    }}> 다음으로
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
    container2: {
        position:"relative",
        width: "100%",
        height:"15vh",
        display:'flex',
        flexDirection:'column',
        overflow:"hidden",
    },
    container3: {
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
        height:"15vh",
        display:"flex",
        color:"black",
        fontSize:"23px",
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
    },
    container5:{
        paddingTop:"6%",
        position:"relative",
        width:"100%", height:"35vh",
        display:"flex",
    },
    container6:{
        position:"relative",
        width:"11%", margin:"1.5%",
        height:"35vh",
        display:"flex"
    },
    radioStyle:{
        justifyContent: "center",
        width: "90%",
        marginLeft: "5%",
        height: `195px`,
        backgroundColor: "#363636",
        color: "#C6C6C6",
        borderRadius: "10px",
        padding: "2%",
        display: 'flex',
        flexDirection: 'column',
        fontSize: '20px'
    },
    labelStyle:{ height: `${radioButtonHeight}px`, display: 'flex', alignItems: 'center'},
    inputStyle:{
        width: '20px',
        height: '20px',
        accentColor: '#C6C6C6',
        marginRight: '10px',
        marginLeft: '10px'
    },
    inputText:{fontSize: '1.2rem', fontWeight:"500"}

};

