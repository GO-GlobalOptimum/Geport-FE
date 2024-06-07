import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from 'axios';

export function Create_Igeport_Posts(props) {
    const navigate = useNavigate();
    const [myposts, setMyposts] = useState([]);
    const [selectedPosts, setSelectedPosts] = useState([]);

    useEffect(() => {
        axios.get('https://your-api-endpoint/posts/list')
            .then(response => setMyposts(response.data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    const handlePostSelection = (post) => {
        if (selectedPosts.includes(post.id)) {
            setSelectedPosts(selectedPosts.filter(p => p !== post.id));
        } else if (selectedPosts.length < 4) {
            setSelectedPosts([...selectedPosts, post.id]);
        }
    };

    const handleRegister = () => {
        // 선택된 포스트 ID를 쿠키에 저장
        Cookies.set('selected_posts', selectedPosts.join(','), { expires: 1 });
        navigate('/igeport/question'); // Igeport_question.js로 이동
    };

    return (
        <div style={{ marginTop: '70px' }}>
            <div>
                <div style={{ textAlign: 'center' }}>
                    <h2>iGeport를 만들 포스트를 알려주세요</h2>
                    <p>포스트 4개를 선택해주세요</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    {selectedPosts.map(postId => {
                        const post = myposts.find(p => p.id === postId);
                        return (
                            <button key={post.id} onClick={() => handlePostSelection(post)} style={{ marginRight: '10px', borderRadius: '20px', padding: '5px 10px', backgroundColor: 'white', color: '#10901FC3', border: '1px solid #10901FC3' }}>
                                {post.title}
                            </button>
                        );
                    })}
                    <button 
                        onClick={handleRegister}
                        style={{ 
                            marginLeft: '10px', 
                            borderRadius: '20px', 
                            padding: '5px 10px', 
                            backgroundColor: selectedPosts.length === 4 ? '#10901FC3' : '#d3d3d3', 
                            color: 'white',
                            border: 'none',
                            cursor: selectedPosts.length === 4 ? 'pointer' : 'not-allowed'
                        }}
                        disabled={selectedPosts.length !== 4}
                    >
                        등록하기
                    </button>
                </div>
                <div>
                    <hr style={{ borderTop: '1px gray', marginTop: '10px', width: '80%', paddingLeft: "5%" }} />
                    <div style={{ paddingLeft: "5%", width: '90%', maxHeight: '500px', overflowY: 'scroll' }}>
                        <div>
                            {myposts.map(post => (
                                <div key={post.id} style={{ marginBottom: '20px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                        <div style={{ marginRight: '10px', flex: '1' }}>
                                            <h3>{post.title}</h3>
                                            <p>{post.content.substring(0, 255)}</p>
                                        </div>
                                        <div style={{ marginRight: '10px' }}>
                                            <button
                                                style={{
                                                    marginRight: '10px',
                                                    marginBottom: '10px',
                                                    borderRadius: '20px',
                                                    padding: '5px 10px',
                                                    backgroundColor: selectedPosts.includes(post.id) ? '#FFB6C1' : '#91F5C3C3',
                                                    border: 'none',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}
                                                onClick={() => handlePostSelection(post)}
                                            >
                                                <img src={"./image/Geport_green.png"} alt="Pen" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                                                {selectedPosts.includes(post.id) ? 'Geport 삭제' : 'Geport 첨부'}
                                            </button>
                                        </div>
                                        <div>
                                            <img src={post.imageUrl} alt="Post" style={{ maxHeight: '150px', maxWidth: '150px' }} />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                            <img src={post.user.image} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                                            <p>{post.user.name}</p>
                                            <p style={{ marginLeft: '20px' }}>{post.date}</p>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginLeft: 'auto' }}>
                                            <img src="./image/heart.png" alt="Likes" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                                            {post.likes}
                                            <img src="./image/comment.png" alt="Comments" style={{ width: '20px', height: '20px', marginLeft: '10px', marginRight: '5px' }} />
                                            {post.comments}
                                            <img src="./image/share.png" alt="Shares" style={{ width: '20px', height: '20px', marginLeft: '10px', marginRight: '5px' }} />
                                            <img src="./image/bookmark.png" alt="Bookmarks" style={{ width: '20px', height: '20px', marginLeft: '10px', marginRight: '5px' }} />
                                        </div>
                                    </div>
                                    <hr style={{ borderTop: '1px gray', width: '90%', paddingLeft: "5%" }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
