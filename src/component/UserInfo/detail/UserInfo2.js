import React, { useState } from 'react';

export function UserInfo2({ nextPage }) {
    const [name, setName] = useState(''); // 사용자 이름을 저장하는 상태

    const handleInputChange = (event) => {
        setName(event.target.value); // 입력 필드의 값이 변경될 때마다 이름 상태 업데이트
    };

    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.container2}></div>
                <div style={styles.container3}>
                    <span style={styles.title}>Geport가 당신을 어떻게 부르면 좋을까요?</span>
                </div>
                <div style={styles.container3}>
                    <span style={styles.subtitle}>Geport를 작성하는 데 참고할 정보입니다.</span>
                </div>
                <div style ={styles.container7}>
                    <div style={styles.inputContainer}>
                        <input
                            type="text"
                            value={name}
                            onChange={handleInputChange}
                            placeholder="이름을 입력해주세요"
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.pageCount}>
                        <svg width="10" height="260" viewBox="0 0 10 260" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" transform="rotate(90 5 5)" fill="#1AE57C"/>
                            <circle cx="5" cy="55" r="5" transform="rotate(90 5 55)" fill="#C6C6C6"/>
                            <circle cx="5" cy="105" r="5" transform="rotate(90 5 105)" fill="#C6C6C6"/>
                            <circle cx="5" cy="155" r="5" transform="rotate(90 5 155)" fill="#C6C6C6"/>
                            <circle cx="5" cy="205" r="5" transform="rotate(90 5 205)" fill="#C6C6C6"/>
                            <circle cx="5" cy="255" r="5" transform="rotate(90 5 255)" fill="#C6C6C6"/>
                        </svg>

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
    pageCount:{
        position:"relative",
        width:"",
        height:"28vh",
        display:"flex",
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
    }
};
