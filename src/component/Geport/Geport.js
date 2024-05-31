import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import {getCookie, setCookie} from "../../function/cookies";

export function Geport() {
    const navigate = useNavigate();
    const [links, setLinks] = useState(Array(5).fill("")); // Start with 5 input boxes

    useEffect(() => {
        if(getCookie("geport").link){
            setLinks(getCookie("geport").link)
        }
    }, []);

    const updateLink = (index, value) => {
        const newLinks = [...links];
        newLinks[index] = value;
        setLinks(newLinks);
    };

    const addLink = () => {
        if (links.length < 10) {
            setLinks([...links, ""]);
        }
    };

    const allFilled = links.every(link => link.trim() !== ""); // Check if all links are filled and not just whitespace
    const handleSubmit = () => {
        console.log(links);
        setCookie("geport", {link: links}, { path : "/"})
        navigate('/geport/question');
    };

    const leftLinks = links.filter((_, index) => index % 2 === 0);
    const rightLinks = links.filter((_, index) => index % 2 !== 0);

    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <div style={styles.container2}></div>
                <div style={styles.container3}><span style={styles.title}>나의 블로그 게시물 링크를 첨부해주세요.</span></div>
                <div style={styles.container3}><span style={styles.subtitle}>게시물 링크를 첨부해주세요<br /> 첨부한 게시물을 바탕으로 iGeport를 만들어드립니다.</span>
                </div>
                <div style={styles.container4}>
                    <div style={styles.gap}>
                        {leftLinks.map((link, index) => (
                            <input
                                key={index}
                                type="text"
                                placeholder="이곳에 블로그 링크를 첨부하세요"
                                style={styles.link_input}
                                value={link}
                                onChange={(e) => updateLink(index * 2, e.target.value)}
                            />
                        ))}
                    </div>
                    <div style={styles.gap}>
                        {rightLinks.map((link, index) => (
                            <input
                                key={index + leftLinks.length}
                                type="text"
                                placeholder="이곳에 블로그 링크를 첨부하세요"
                                style={styles.link_input}
                                value={link}
                                onChange={(e) => updateLink(index * 2 + 1, e.target.value)}
                            />
                        ))}
                        {links.length < 10 && (
                            <button
                                style={styles.addButton}
                                onClick={addLink}
                            >
                                +
                            </button>
                        )}
                    </div>
                </div>
                <div style={styles.container5}>
                    <button style={{ ...styles.button, backgroundColor: allFilled ? '#1AE57C' : '#525252', color: allFilled ? "8D8D8D" : "black" }}
                            onClick={handleSubmit} disabled={!allFilled}>
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
        overflow: "hidden",
    },
    container2: {
        position: "relative",
        width: "100%",
        height: "15vh",
        display: 'flex',
        flexDirection: 'column',
        overflow: "hidden",
    },
    container3: {
        position: "relative",
        width: "100%",
        height: "7.5vh",
        display: 'flex',
        flexDirection: 'column',
        overflow: "hidden",
        margin: "1%"
    },
    container4: {
        position: "relative",
        width: "100%",
        height: "50vh",
        display: 'flex',
        overflow: "hidden",
        alignItems: 'center',
        justifyContent: 'center',
    },
    gap: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    link_input: {
        position: "relative",
        width: "32vw",
        height: "5vh",
        display: "flex",
        overflow: "hidden",
        backgroundColor: "#363636",
        borderRadius: "10px",
        margin: "1vw",
        paddingLeft: "10px",
        color: "#C6C6C6",
        fontSize: "16px"
    },
    addButton: {
        position: "relative",
        width: "33vw",
        height: "5vh",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#525252",
        borderRadius: "10px",
        margin: "1vw",
        color: "#C6C6C6",
        fontSize: "24px",
        cursor: 'pointer',
    },
    container5: {
        position: "relative",
        width: "100%",
        height: "15vh",
        display: "flex",
        color: "black",
        fontSize: "23px",
        fontWeight: "300",
        paddingLeft: "60px"
    },
    button: {
        width: '10vw',
        height: '5vh',
        backgroundColor: '#1AE57C',
        color: 'white',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '24px',
        fontWeight: "600"
    },
    title: {
        paddingLeft: '50px',
        fontWeight: "600",
        color: "white",
        fontSize: "32px"
    },
    subtitle: {
        paddingLeft: '50px',
        fontWeight: "600",
        color: "#C6C6C6",
        fontSize: "20px",
        paddingTop: "2%"
    }
};