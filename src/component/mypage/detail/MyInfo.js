import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export function MyInfo(props) {
    const [userInfo, setUserInfo] = useState({
        profilePhoto: './image/type=profile_green.png',
        name: '',
        bio: ''
    });
    const [myposts, setMyposts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // 이건 로그인 했을 때 쿠키를 저장해줘야 해서 로그인에서 쿠키를 생성해 줘야한다.
        Cookies.set('memberId', 1, { expires: 7 });
    
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/BE/spring/user/myInfo', {
                    headers: {
                    },
                    withCredentials: true
                });
                const data = response.data;
                setUserInfo({
                    profilePhoto: data.image_url || './image/user.png',
                    name: data.name,
                    bio: data.bio
                });
            } catch (error) {
                console.error('Error fetching user info:', error);
            } finally {
                setLoading(false);
            }
        };
    
        const fetchPostsData = async () => {
            try {
                const response = await axios.get('/BE/spring/posts/list/my-list', {
                    headers: {
                    },
                    withCredentials: true
                });
                setMyposts(response.data.content);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
    
        fetchUserData();
        fetchPostsData();
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
                                        {/* <img src={post.thumbnailImage} alt="Post" style={{ maxHeight: '150px', maxWidth: '150px' }} /> */}
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