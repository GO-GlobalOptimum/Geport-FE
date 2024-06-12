import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from 'axios';
import { setCookie } from '../../../function/cookies';

export function Create_Geport_Posts(props) {
    const navigate = useNavigate();
    const [myposts, setMyposts] = useState([]);
    const [selectedPosts, setSelectedPosts] = useState([]);

    // 이 부분은 실제 로그인 후 설정해야 할 것 같습니다.
    // Cookies.set('memberId', 1, { expires: 7 });

    useEffect(() => {
        console.log("useEffect in");
        const memberId =3; // 쿠키에서 memberId 가져오기
        setCookie('memberId', 3, { path:'/'})
        axios.get('/BE/spring/posts/list/my-list', {
            headers: {
                'memberId': memberId // 요청 헤더에 memberId 추가
            },
            withCredentials: true // 쿠키를 포함하여 요청을 보냄
        })
            .then(response => {
                if (Array.isArray(response.data.content)) {
                    setMyposts(response.data.content);
                } else {
                    console.error('Received data content is not an array:', response.data.content);
                }
            })
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
        setCookie("selected_posts", selectedPosts.join(','), { path: '/' });
        navigate('/geport/question'); // Igeport_question.js로 이동
    };

    return (
        <div style={{ marginTop: '70px' }}>
            <div>
                <div style={{ textAlign: 'center' }}>
                    <h2>Geport를 만들 포스트를 알려주세요</h2>
                    <p>포스트 4개를 선택해주세요</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    {selectedPosts.map(postId => {
                        const post = myposts.find(p => p.id === postId);
                        return (
                            post && (
                                <button key={post.id} onClick={() => handlePostSelection(post)} style={{ marginRight: '10px', borderRadius: '20px', padding: '5px 10px', backgroundColor: 'white', color: '#10901FC3', border: '1px solid #10901FC3' }}>
                                    {post.title}
                                </button>
                            )
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
                        active={selectedPosts.length === 4 ? 'true' : 'false'} // 이 부분 수정
                    >
                        등록하기
                    </button>
                    {/* <button
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
                        active={selectedPosts.length === 4 ? 'true' : 'false'} // 이 부분 수정
                    >
                        등록하기
                    </button> */}
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
                                            <p>{post.postContent ? post.postContent.substring(0, 255) : '내용 없음'}</p>
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
                                            <img src={post.imageUrl ? post.imageUrl :'https://lh3.googleusercontent.com/a/ACg8ocJB4FovhYQHo2lcpzWPMgCXV5hUhfEffnY5EskOdZAZN_fYisrG'} alt="Post" style={{ maxHeight: '150px', maxWidth: '150px' }} />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                            {post.user && (
                                                <>
                                                    <img src={post.user.image} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                                                    <p>{post.user.name}</p>
                                                </>
                                            )}
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
