import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export function MyInfo(props) {
    const [userInfo, setUserInfo] = useState({
        profilePhoto: './image/user.png',
        name: '',
        bio: '',
        mbti: '',
        age: '',
        gender: '',
        phoneNumber: ''
    });
    const [myposts, setMyposts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
<<<<<<< HEAD
        // 컴포넌트가 마운트될 때 사용자 정보를 불러옵니다.
        axios.get("/BE/spring/user/myInfo", { withCredentials: true })
=======
        axios.get("http://localhost:8080/spring/user/myInfo", { withCredentials: true })
>>>>>>> b855c10d3e6d1ebd53c7365d8e46eaf4c6ef552b
            .then(response => {
                const userData = response.data;
                setUserInfo({
                    profilePhoto: userData.imageUrl || './image/user.png',
                    name: userData.nickName,
                    bio: userData.bio,
                    mbti: userData.mbti,
                    age: userData.age.toString(),
                    gender: userData.gender,
                    phoneNumber: userData.phoneNumber
                });
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching user data:", error);
                setLoading(false);
            });

        // 게시글 정보를 불러옵니다.
        axios.get("/BE/spring/posts/list/my-list", { withCredentials: true })
            .then(response => {
                setMyposts(response.data.content);
            })
            .catch(error => {
                console.error("There was an error fetching posts:", error);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>
                <img src={userInfo.profilePhoto} alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%', padding: "5%", cursor: "pointer", marginTop: '70px' }} />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ paddingLeft: "5%", marginRight: "40%", fontSize: '24px', fontWeight: 'bold' }}>{userInfo.name} 님</p>
                    <button style={{ marginRight: '10px', marginBottom: '10px', borderRadius: '20px', padding: '5px 10px', backgroundColor: '#91F5C3C3', border: 'none', display: 'flex', alignItems: 'center' }}>
                        <img src={"./image/Geport_green.png"} alt="Pen" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                        나의 Geport
                    </button>
                </div>
                <p style={{ paddingLeft: "5%" }}>{userInfo.bio}</p>
            </div>
            <div>
                <br />
                <br />
                <br />
                <p style={{ paddingLeft: "5%", fontSize: '20px', fontWeight: 'bold' }}>내가 쓴 게시글</p>
                <hr style={{ borderTop: '1px gray', marginTop: '10px', width: '80%', paddingLeft: "5%" }} />
                <div style={{ paddingLeft: "5%", width: '90%', maxHeight: '350px', overflowY: 'scroll' }}>
                    <div>
                        {myposts.map(post => (
                            <div key={post.id} style={{ marginBottom: '20px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    <div style={{ marginRight: '10px', flex: '1' }}>
                                        <h3>{post.title}</h3>
                                        <p>{post.postContent.substring(0, 255)}</p>
                                    </div>
                                    <div style={{ marginRight: '10px' }}>
                                        <button style={{ marginRight: '10px', marginBottom: '10px', borderRadius: '20px', padding: '5px 10px', backgroundColor: '#91F5C3C3', border: 'none', display: 'flex', alignItems: 'center' }}>
                                            <img src={"./image/Geport_green.png"} alt="Pen" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                                            Geport 첨부
                                        </button>
                                    </div>
                                    <div>
                                        <img src={`${process.env.PUBLIC_URL}/image/Hotpage1.png`} alt="Post" style={{ maxHeight: '150px', maxWidth: '150px' }} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                        <img src={"./image/user.png"} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                                        <p>{userInfo.name}</p>
                                        <p style={{ marginLeft: '20px' }}>{post.createdDate}</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginLeft: 'auto' }}>
                                        <img src="./image/heart.png" alt="Likes" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                                        {post.likeCount}
                                        <img src="./image/comment.png" alt="Comments" style={{ width: '20px', height: '20px', marginLeft: '10px', marginRight: '5px' }} />
                                        {post.commentCount}
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
    );
}

