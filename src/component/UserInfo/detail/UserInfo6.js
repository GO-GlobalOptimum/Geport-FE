import React, { useState } from 'react';

export function UserInfo6({ nextPage }) {
    const [name, setName] = useState(''); // 사용자 이름을 저장하는 상태

    const options=['남성','여성', '밝히지 않음'];
    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const [selectedOption, setSelectedOption] = useState('');
    const handleRadioChange = (value) => {
        setSelectedOption(value); // 라디오 버튼 선택 시 선택된 값을 상태에 저장
    };
    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.container2}></div>
                <div style={styles.container3}>
                    <span style={styles.title}>당신의 성별을 알려주세요.</span>
                </div>
                <div style={styles.container3}>
                    <span style={styles.subtitle}>Geport를 작성하는 데 참고할 정보입니다. <br/> 만 나이로 알려주세요.</span>
                </div>
                <div style ={styles.container7}>
                    <div style={styles.radioStyle}>
                        <span style={styles.inputText}>
                            {options.map((option, index) => (
                                <label key={index}
                                       style={styles.labelStyle}>
                                    <input type="radio" name="myRadioGroup" value={option}
                                           checked={selectedOption === option}
                                           onChange={() => handleRadioChange(option)}
                                           style={styles.inputStyle}
                                    />
                                    {option}
                                </label>
                            ))}
                        </span>
                    </div>
                    <div style={styles.pageCount}>
                        <svg width="10" height="260" viewBox="0 0 10 260" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" transform="rotate(90 5 5)" fill="#C6C6C6"/>
                            <circle cx="5" cy="55" r="5" transform="rotate(90 5 55)" fill="#C6C6C6"/>
                            <circle cx="5" cy="105" r="5" transform="rotate(90 5 105)" fill="#C6C6C6"/>
                            <circle cx="5" cy="155" r="5" transform="rotate(90 5 155)" fill="#C6C6C6"/>
                            <circle cx="5" cy="205" r="5" transform="rotate(90 5 205)" fill="#1AE57C"/>
                            <circle cx="5" cy="255" r="5" transform="rotate(90 5 255)" fill="#C6C6C6"/>
                        </svg>

                    </div>
                </div>
                <div style={styles.container4}>
                    <button style={{
                        ...styles.button,
                        backgroundColor: selectedOption ? '#1AE57C' : '#525252' // 선택된 옵션이 있으면 버튼을 검은색으로 변경
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
    subtitle: {
        paddingLeft: '50px',
        fontWeight:"600",
        color:"#C6C6C6",
        fontSize:"20px",
        paddingTop:"2%"
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
    inputContainer: {
        paddingTop:"5%",
        width: '100%',
        paddingLeft:"60px",
        backgroundColor: '#1E1E1E'
    },
    input: {
        width: '90%',
        height: '70px',
        paddingLeft:"15px",
        fontSize: '1.2rem',
        color: '#C6C6C6',
        backgroundColor: '#333',
        border: 'none',
        borderRadius:"24px"
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
    container7:{
        position:"relative",
        width:"90%",
        height:"28vh",
        display:"flex",
        backgroundColor: '#1E1E1E',
    },
    pageCount:{
        position:"relative",
        width:"",
        height:"28vh",
        display:"flex",
        paddingLeft:"11%",
        backgroundColor: '#1E1E1E'
    },
    button: {
        width: '10vw',
        height :'5vh',
        backgroundColor: '#525252',
        color: 'black',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '24px',
        fontWeight:"600"
    },radioStyle:{
        justifyContent: "center",
        width: "85%",
        marginTop:"2%",
        marginLeft: "5%",
        height: `195px`,
        color: "#C6C6C6",
        backgroundColor: "#363636",
        borderRadius: "24px",
        padding: "2%",
        display: 'flex',
        flexDirection: 'column',
        fontSize: '20px'
    },
    labelStyle:{ height: `65px`, display: 'flex',
        alignItems: 'center'},
    inputStyle:{
        width: '20px',
        height: '20px',
        accentColor: '#C6C6C6',
        marginRight: '10px',
        marginLeft: '10px'
    },
    inputText:{fontSize: '1.2rem', fontWeight:"500"}

};
