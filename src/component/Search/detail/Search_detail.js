import React from "react";

export function Search_detail() {
    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.titleContainer}>
                    <span style={styles.title}>
                        검색어를 입력하세요
                    </span>
                </div>
                <div style={styles.searchBox}>
                    <img src="./image/search.png" alt="Search" style={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="검색어를 입력해주세요."
                        style={styles.input}
                    />
                </div>
                <div style={styles.historyContainer}>
                    <div style={styles.subTitleContainer}>
                        <span style={styles.subTitle}>
                            지난 검색어
                        </span>
                    </div>
                    <ul style={styles.historyList}>
                        <li style={styles.listItem}>해변 여행지</li>
                        <li style={styles.listItem}>초코아이콘</li>
                        <li style={styles.listItem}>자이언티</li>
                        <li style={styles.listItem}>독일 자유여행</li>
                        <li style={styles.listItem}>드레스 대표곡</li>
                    </ul>
                </div>
                <div style={styles.topicsContainer}>
                    <div style={styles.subTitleContainer}>
                        <span style={styles.subTitle}>
                            추천 토픽
                        </span>
                    </div>
                    <ul style={styles.topicList}>
                        <li style={styles.listItem}>#과학</li>
                        <li style={styles.listItem}>#물리</li>
                        <li style={styles.listItem}>#음악</li>
                        <li style={styles.listItem}>#여행</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    container1: {
        position: "relative",
        width: "75%",
        height: "auto",
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        // backgroundColor: "white",
        // padding: "20px",
        // borderRadius: "10px",
        // boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        overflow: "hidden",
    },
    titleContainer: {
        marginBottom: '20px',
    },
    title: {
        fontWeight: "600",
        color: "black",
        fontSize: "32px",
    },
    searchBox: {
        position: 'relative',
        width: '55%',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },
    searchIcon: {
        position: 'absolute',
        left: '20px',
        width: '20px',
        height: '20px',
    },
    input: {
        width: '100%',
        height: '50px',
        paddingLeft: "50px",
        fontSize: '1.2rem',
        color: 'black',
        backgroundColor: '#F5F5F5',
        border: 'none',
        borderRadius: "24px",
    },
    historyContainer: {
        width: '50%',
        marginBottom: '20px',
    },
    subTitleContainer: {
        marginBottom: '10px',
    },
    subTitle: {
        fontWeight: "550",
        color: "black",
        fontSize: "20px",
    },
    historyList: {
        listStyle: 'none',
        paddingLeft: '0',
    },
    listItem: {
        fontSize: "16px",
        color: "black",
        marginBottom: '5px',
    },
    topicsContainer: {
        width: '50%',
    },
    topicList: {
        listStyle: 'none',
        paddingLeft: '0',
    },
};

