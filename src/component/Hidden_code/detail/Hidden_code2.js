import React, { useState } from 'react';

export function Hidden_code2({ nextPage }) {
    const [name, setName] = useState(''); // 사용자 이름을 저장하는 상태

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.container2}></div>
                <div style={styles.container3}>
                    <span style={styles.title}>히든코드를 입력해주세요.</span>
                </div>
                <div style={styles.container3}>
                    <span style={styles.subtitle}>모든 문항에 응답하셨다면 Geport를 열람할 수 있는 히든코드를 메시지로 보내드립니다.</span>
                </div>
                <div style ={styles.container7}>
                    <div style={styles.inputContainer}>
                        <input
                            type="text"
                            value={name}
                            onChange={handleInputChange}
                            placeholder="히든 코드를 입력해주세요."
                            style={styles.input}
                        />
                    </div>
                </div>
                <div style={styles.container4}>
                    <button
                        style={{
                            ...styles.button,
                            backgroundColor: name.trim() ? '#1AE57C' : '#525252' // 이름이 있을 때만 버튼 색상 변경
                        }}
                        onClick={() => name.trim() && nextPage()} // 버튼 클릭 시 입력된 이름이 있으면 nextPage 호출
                        disabled={!name.trim()} // 이름이 없을 때 버튼 비활성화
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
    }
};
