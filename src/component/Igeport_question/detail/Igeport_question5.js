import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

export function Igeport_question5({ nextPage }) {

    const navigate = useNavigate(); // Properly declared inside the component
    const options = [
        '나는 종종 스트레스나 불안을 느낀다.',
        '나는 감정 상태가 자주 바뀌는 편이다.'
    ];
    const radioButtonHeight = 80; // 라디오 버튼 하나의 높이 (픽셀 단위)
    const radioGroupHeight = options.length * radioButtonHeight; // 라디오 버튼 그룹 전체의 높이 계산

    const [selectedOption, setSelectedOption] = useState('');
    const handleRadioChange = (value) => {
        setSelectedOption(value); // 라디오 버튼 선택 시 선택된 값을 상태에 저장
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
                        <span style={{fontSize: '1.0rem'}}>
                            {options.map((option, index) => (
                                <label key={index}
                                       style={{height: `${radioButtonHeight}px`, display: 'flex', alignItems: 'center'}}>
                                    <input
                                        type="radio"
                                        name="myRadioGroup"
                                        value={option}
                                        checked={selectedOption === option}
                                        onChange={() => handleRadioChange(option)}
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            accentColor: '#C6C6C6',
                                            marginRight: '10px',
                                            marginLeft: '10px'
                                        }}
                                    />
                                    {option}
                                </label>
                            ))}
                        </span>
                    </div>
                </div>
                <div style={styles.container4}>
                    <button style={{
                        ...styles.button,
                        backgroundColor: selectedOption ? '#1AE57C' : '#525252' // 선택된 옵션이 있으면 버튼을 검은색으로 변경
                    }} onClick={nextPage}>
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
    }

};

