import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Search_detail() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPostsData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/spring/posts/list', {
                    withCredentials: true
                });
                const filteredPosts = response.data.content.filter(post =>
                    post.title.includes(searchTerm) || post.postContent.includes(searchTerm)
                );
                setSearchResults(filteredPosts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        if (searchTerm) {
            fetchPostsData();
        } else {
            setSearchResults([]);
        }
    }, [searchTerm]);

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
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={styles.input}
                    />
                </div>
                {searchTerm ? (
                    <div>
                        <div>
                            <hr style={{ borderTop: '1px gray', width: '80%', paddingLeft: "5%", marginTop:'70px'}} />
                            <div style={{paddingLeft: "5%", width: '90%' }}>
                                <div>
                                    {searchResults.map(post => (
                                        <div key={post.id} style={{ marginBottom: '20px', cursor: 'pointer' }} onClick={() => navigate(`/posts/${post.id}`)}>
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <div style={{ marginRight: '10px', flex: '1' }}>
                                                    <h3>{post.title}</h3>
                                                    <p>{post.postContent.substring(0, 255)}</p>
                                                </div>
                                                <div style={{ marginRight: '10px' }}>
                                                    <button style={{ marginRight: '10px', marginBottom: '10px', borderRadius: '20px', padding: '5px 10px', backgroundColor: '#91F5C3C3', border: 'none' ,display: 'flex', alignItems: 'center' }}>
                                                        <img src={"./image/Geport_green.png"} alt="Pen" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                                                        Geport 첨부
                                                    </button>
                                                </div>
                                                <div>
                                                    <img src={post.thumbnailImage} alt="Post" style={{ maxHeight: '150px', maxWidth: '150px' }} />
                                                </div>
                                            </div>
                                            <div style={{display:'flex', alignItems: 'center'}}>
                                                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                                    <img src={"./image/Hotpage1.png"} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                                                    <p>{post.name}</p>
                                                    <p style={{ marginLeft: '20px' }}>{post.createdDate}</p>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px',  marginLeft: 'auto'  }}>
                                                    <img src="./image/heart.png" alt="Likes" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                                                    {post.likeCount}
                                                    <img src="./image/comment.png" alt="Comments" style={{ width: '20px', height: '20px', marginLeft: '10px', marginRight: '5px' }} />
                                                    {post.replyCount}
                                                    <img src="./image/share.png" alt="Shares" style={{ width: '20px', height: '20px', marginLeft: '10px', marginRight: '5px' }} />
                                                    <img src="./image/bookmark.png" alt="Bookmarks" style={{ width: '20px', height: '20px', marginLeft: '10px', marginRight: '5px' }} />
                                                </div>
                                            </div>
                                            <hr style={{ borderTop: '1px gray', width: '90%', paddingLeft: "5%"}} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
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
                    </>
                )}
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
    resultsContainer: {
        width: '50%',
        marginBottom: '20px',
    },
    postContainer: {
        marginBottom: '20px',
        padding: '10px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    postTitle: {
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '10px',
    },
    postContent: {
        fontSize: '16px',
        color: '#333',
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
