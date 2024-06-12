import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export function Post(props) {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { postId } = useParams();

    const deletehandler = async () => {
        try {
            await axios.post(`http://localhost:8080/spring/posts/${postId}/delete`, {
                withCredentials: true
            });
            navigate("/mainpage");
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const updatehandler = () => {
        navigate(`./update/${postId}`);
    };

    useEffect(() => {
        Cookies.set('memberId', 1, { expires: 7 });

        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/spring/posts/post/${postId}`, {
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
        return <div>No post found</div>;
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '50%', marginTop: '30px' }}>
                    <div key={post.id} style={{ marginBottom: '20px' }}>
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
                                        <img src={`${process.env.PUBLIC_URL}/image/user.png`} alt="Profile" style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            marginRight: '10px'
                                        }} />
                                        <div>
                                            <p style={{ fontWeight: 'bold' }}>{post.name}</p>
                                            <p style={{ fontSize: '14px', marginTop: '-10px' }}>{post.createDate}</p>
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
                                        <button onClick={updatehandler} style={{
                                            marginRight: '10px',
                                            padding: '5px 10px',
                                            borderRadius: '20px',
                                            backgroundColor: '#DDDDDD',
                                            border: 'none'
                                        }}>수정</button>
                                        <button onClick={deletehandler} style={{
                                            padding: '5px 10px',
                                            borderRadius: '20px',
                                            backgroundColor: '#DDDDDD',
                                            border: 'none'
                                        }}>삭제</button>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        fontSize: '14px',
                                        letterSpacing: '0.8px',
                                        lineHeight: '30px'
                                    }}
                                    dangerouslySetInnerHTML={{ __html: post.postContent }} // Render post content with images
                                />
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: '10px',
                                marginLeft: 'auto'
                            }}>
                                <img src={`${process.env.PUBLIC_URL}/image/heart.png`} alt="Likes"
                                     style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                                {post.likes}
                                <img src={`${process.env.PUBLIC_URL}/image/comment.png`} alt="Comments" style={{
                                    width: '20px',
                                    height: '20px',
                                    marginLeft: '10px',
                                    marginRight: '5px'
                                }} />
                                {post.comments}
                                <img src={`${process.env.PUBLIC_URL}/image/share.png`} alt="Shares" style={{
                                    width: '20px',
                                    height: '20px',
                                    marginLeft: '10px',
                                    marginRight: '5px'
                                }} />
                                <img src={`${process.env.PUBLIC_URL}/image/bookmark.png`} alt="Bookmarks" style={{
                                    width: '20px',
                                    height: '20px',
                                    marginLeft: '10px',
                                    marginRight: '5px'
                                }} />
                            </div>
                        </div>
                        <hr style={{ borderTop: '1px gray', width: '90%', paddingLeft: "5%" }} />
                        <div>
                            <h2>댓글이 없습니다.</h2>
                            {/* 댓글창 구현 */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
