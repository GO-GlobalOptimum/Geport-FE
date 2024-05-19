import React from 'react';

export function Hidden_code1({ nextPage }) {
    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.container3}>
                    <span style={styles.title}>
                        히든코드를 받으셨나요?
                    </span>
                </div>
                <div style={styles.container3}>
                    <span style={styles.subtitle}>
                        Geport를 열람할 수 있는 히든코드를 입력하신 전화번호로 보내드립니다.<br />
                        아직 히든코드를 받지 못했다면 조금만 더 기다려주세요.
                    </span>
                </div>
                <div style={styles.container4}>
                    <button style={styles.button} onClick={nextPage}>
                        히든코드로 Geport 조회하기
                    </button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        position: 'relative', // Needed for absolute positioning of children
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
        overflow: "hidden",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    container2: {
        position: "relative",
        width: "100%",
        height: "8vh",
        display: 'flex',
        flexDirection: 'column',
        overflow: "hidden",
    },
    container3: {
        position: "relative",
        width: "100%",
        height: "10vh",
        display: 'flex',
        flexDirection: 'column',
        overflow: "hidden",
        margin: "1%",
        textAlign: 'center',
    },
    title: {
        fontWeight: "600",
        color: "white",
        fontSize: "32px",
        marginBottom: "20px",
    },
    subtitle: {
        fontWeight: "600",
        color: "#C6C6C6",
        fontSize: "20px",
        paddingTop: "2%",
    },
    container4: {
        width: "100%",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40px',
    },
    button: {
        width: '20vw',
        height: '7vh',
        backgroundColor: '#1AE57C',
        color: 'black',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '20px',
        fontWeight: "600",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}
