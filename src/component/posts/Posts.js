import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export function Posts(props) {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcxODQzNjk5MiwidHlwZSI6ImFjY2VzcyIsImVtYWlsIjoicGljaDc3NTVAbmF2ZXIuY29tIn0.P-vrcBUpcMKTfLiL9ZrW0JqWRT9mOwWyLdA27wijvg5ASdqUcxqXsKt7mEzxmjT2-Uq46dy-9Xo7oVR_6xdU1w';

        const fetchPost = async () => {
            try {
                const response = await axios.get(`/BE/spring/posts/post/${postId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    withCredentials: true
                });
                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [postId]);

    const logoClick = () => {
        navigate("/");
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!post) {
        return <div>Post not found</div>;
    }

    const formattedDate = `${post.createDate[0]}-${post.createDate[1]}-${post.createDate[2]}`;

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    <img src={"./image/Logo.png"} style={{
                        marginRight: '10px',
                        width: '150px',
                        height: '30px',
                        padding: "1%",
                        cursor: "pointer",
                        borderRadius: "5px"
                    }} onClick={logoClick} />
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: "#ccc",
                        borderRadius: '50px',
                        border: '1px solid #ccc',
                        padding: '5px',
                        height: '30px',
                        flex: 1
                    }}>
                        <img src={"./image/search.png"} alt="Search"
                             style={{ marginRight: '5px', width: '20px', height: '20px', cursor: 'pointer' }} />
                        <input type="text" placeholder="검색어를 입력하세요" style={{
                            background: "transparent",
                            border: 'none',
                            outline: 'none',
                            flex: 1,
                            height: '100%'
                        }} />
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="./image/notification.png" alt="notification"
                         style={{ width: '20px', height: '20px', marginRight: '20px' }} />
                    <img src="./image/user.png" alt="user"
                         style={{ width: '20px', height: '20px', marginRight: '20px' }} />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '50%', marginTop: '30px' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <div style={{ marginRight: '10px', flex: '1' }}>
                                <h3 style={{ fontSize: '48px' }}>{post.title}</h3>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginBottom: '10px'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src={"./image/user.png"} alt="Profile" style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            marginRight: '10px'
                                        }} />
                                        <div>
                                            <p style={{ fontWeight: 'bold' }}>{post.name}</p>
                                            <p style={{ fontSize: '14px', marginTop: '-10px' }}>{formattedDate}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button style={{
                                            marginRight: '10px',
                                            padding: '5px 10px',
                                            borderRadius: '20px',
                                            backgroundColor: '#DDDDDD',
                                            border: 'none'
                                        }}>통계</button>
                                        <button style={{
                                            marginRight: '10px',
                                            padding: '5px 10px',
                                            borderRadius: '20px',
                                            backgroundColor: '#DDDDDD',
                                            border: 'none'
                                        }}>수정</button>
                                        <button style={{
                                            padding: '5px 10px',
                                            borderRadius: '20px',
                                            backgroundColor: '#DDDDDD',
                                            border: 'none'
                                        }}>삭제</button>
                                    </div>
                                </div>
                                <p style={{
                                    fontSize: '14px',
                                    letterSpacing: '0.8px',
                                    lineHeight: '30px'
                                }}>{post.postContent}</p>
                                <img src={post.imageUrl || "./image/default_post_image.png"} alt="Post" style={{ width: '100%' }} />
                                <p style={{
                                    fontSize: '14px',
                                    letterSpacing: '0.8px',
                                    lineHeight: '30px'
                                }}>{post.postContent}</p>
                                <div>
                                    <p>Tags: {post.tags.split(',').map(tag => `#${tag} `)}</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: '10px',
                                marginLeft: 'auto'
                            }}>
                                <img src="./image/heart.png" alt="Likes"
                                     style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                                {post.likes}
                                <img src="./image/comment.png" alt="Comments" style={{
                                    width: '20px',
                                    height: '20px',
                                    marginLeft: '10px',
                                    marginRight: '5px'
                                }} />
                                {post.comments}
                                <img src="./image/share.png" alt="Shares" style={{
                                    width: '20px',
                                    height: '20px',
                                    marginLeft: '10px',
                                    marginRight: '5px'
                                }} />
                                <img src="./image/bookmark.png" alt="Bookmarks" style={{
                                    width: '20px',
                                    height: '20px',
                                    marginLeft: '10px',
                                    marginRight: '5px'
                                }} />
                            </div>
                        </div>
                        <hr style={{ borderTop: '1px gray', width: '90%', paddingLeft: "5%" }} />
                        <div>
                            <h2>댓글창</h2>
                            <div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    marginTop: '20px',
                                    padding: '10px',
                                    backgroundColor: '#f9f9f9',
                                    borderRadius: '10px'
                                }}>
                                    <img src={"./image/user.png"} alt="Profile" style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        marginRight: '10px'
                                    }} />
                                    <div style={{ flex: 1 }}>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginBottom: '10px'
                                        }}>
                                            <div>
                                                <p style={{ fontWeight: 'bold', margin: 0 }}>{post.name}</p>
                                                <p style={{ fontSize: '12px', margin: 0, color: '#777' }}>{formattedDate}</p>
                                            </div>
                                            <div>
                                                <button style={{
                                                    marginRight: '10px',
                                                    padding: '5px 10px',
                                                    borderRadius: '20px',
                                                    backgroundColor: '#DDDDDD',
                                                    border: 'none',
                                                    cursor: 'pointer'
                                                }}>추가</button>
                                                <button style={{
                                                    padding: '5px 10px',
                                                    borderRadius: '20px',
                                                    backgroundColor: '#DDDDDD',
                                                    border: 'none',
                                                    cursor: 'pointer'
                                                }}>삭제</button>
                                            </div>
                                        </div>
                                        <input type="text" placeholder="댓글을 입력하세요" style={{
                                            width: '100%',
                                            padding: '10px',
                                            borderRadius: '10px',
                                            border: '1px solid #ddd',
                                            outline: 'none'
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
