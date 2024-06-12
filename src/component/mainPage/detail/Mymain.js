import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export function MyMain(props){
    const [myposts, setMyposts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    //const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcxODQzNjk5MiwidHlwZSI6ImFjY2VzcyIsImVtYWlsIjoicGljaDc3NTVAbmF2ZXIuY29tIn0.P-vrcBUpcMKTfLiL9ZrW0JqWRT9mOwWyLdA27wijvg5ASdqUcxqXsKt7mEzxmjT2-Uq46dy-9Xo7oVR_6xdU1w'

    useEffect(() => {
        const fetchPostsData = async () => {
            try {
                const response = await axios.get('http://default-recsys-service-7a51c-24704520-06bf223bd6a1.kr.lb.naverncp.com/predict?user_id=1', {
                    // headers: {
                    //     Authorization: `Bearer ${token}`
                    // },
                    // withCredentials: true
                });
                setMyposts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPostsData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return(
        <div>
            <div>
                <hr style={{ borderTop: '1px gray', width: '80%', paddingLeft: "5%", marginTop:'70px'}} />
                <div style={{paddingLeft: "5%", width: '90%' }}>
                    <div>
                        {myposts.map(post => (
                            <div key={post.post_id} style={{ marginBottom: '20px', cursor: 'pointer' }} onClick={() => navigate(`/posts/${post.post_id}`)}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    <div style={{ marginRight: '10px', flex: '1' }}>
                                        <h3>{post.title}</h3>
                                        <p>{post.post_content.substring(0, 255)}</p>
                                    </div>
                                    <div style={{ marginRight: '10px' }}>
                                        <button style={{ marginRight: '10px', marginBottom: '10px', borderRadius: '20px', padding: '5px 10px', backgroundColor: '#91F5C3C3', border: 'none' ,display: 'flex', alignItems: 'center' }}>
                                            <img src={"./image/Geport_green.png"} alt="Pen" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                                            Geport 첨부
                                        </button>
                                    </div>
                                    <div>
                                        <img src={post.thumbnail_image ? post.thumbnail_image : `${process.env.PUBLIC_URL}/image/Hotpage1.png`} alt="Post" style={{ maxHeight: '150px', maxWidth: '150px' }} />
                                    </div>
                                </div>
                                <div style={{display:'flex', alignItems: 'center'}}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                        <img src={"./image/user.png"} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                                        <p>{post.nick_name ? post.nick_name : 'Anonymous'}</p>
                                        <p style={{ marginLeft: '20px' }}>{new Date(post.created_at).toLocaleDateString()}</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px',  marginLeft: 'auto'  }}>
                                        <img src="./image/heart.png" alt="Likes" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                                        {post.like_count}
                                        <img src="./image/comment.png" alt="Comments" style={{ width: '20px', height: '20px', marginLeft: '10px', marginRight: '5px' }} />
                                        {post.comment_count}
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
    )
}