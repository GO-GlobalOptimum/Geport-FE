import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export function Create_Igeport_Posts(props) {

    const navigate = useNavigate();
    const [selectedPosts, setSelectedPosts] = useState([]);

    const myposts = [
        {
            id: 1,
            title: "집에 가고싶다.",
            content: "언제까지 이곳에 머물 것인가...? 이제는 집을 갈 때가 되었다....(두둥..ㅇ.ㅇ)",
            imageUrl: "./image/Hotpage1.png",
            user: {
                name: "유현우",
                image: "./image/Hotpage1.png"
            },
            date: "23-01-20",
            likes: 10,
            comments: 5
        },
        {
            id: 2,
            title: "고효율 작업을 위한 생산성 도구 추천1",
            content: "여행은 새로운 경험과 추억을 선서하지만, 올바른 준비가 필수입니다. 이번 블로그 포스트에서는 여행자가 가져가야 할 10가지 필수 아이템을 상세히 소개합니다. 첫째, 편안한 여행을 위한 양질의 여행 가방. 두번째는 다양한...",
            imageUrl: "./image/Hotpage1.png",
            user: {
                name: "김영희",
                image: "./image/Hotpage1.png"
            },
            date: "24-05-11",
            likes: 15,
            comments: 8
        },
        {
            id: 3,
            title: "고효율 작업을 위한 생산성 도구 추천2",
            content: "여행은 새로운 경험과 추억을 선서하지만, 올바른 준비가 필수입니다. 이번 블로그 포스트에서는 여행자가 가져가야 할 10가지 필수 아이템을 상세히 소개합니다. 첫째, 편안한 여행을 위한 양질의 여행 가방. 두번째는 다양한...",
            imageUrl: "./image/Hotpage1.png",
            user: {
                name: "고영희",
                image: "./image/Hotpage1.png"
            },
            date: "24-11-25",
            likes: 15,
            comments: 8
        },
        {
            id: 4,
            title: "고효율 작업을 위한 생산성 도구 추천3",
            content: "여행은 새로운 경험과 추억을 선서하지만, 올바른 준비가 필수입니다. 이번 블로그 포스트에서는 여행자가 가져가야 할 10가지 필수 아이템을 상세히 소개합니다. 첫째, 편안한 여행을 위한 양질의 여행 가방. 두번째는 다양한...",
            imageUrl: "./image/Hotpage1.png",
            user: {
                name: "고영희",
                image: "./image/Hotpage1.png"
            },
            date: "24-11-25",
            likes: 15,
            comments: 8
        },
        {
            id: 5,
            title: "고효율 작업을 위한 생산성 도구 추천4",
            content: "여행은 새로운 경험과 추억을 선서하지만, 올바른 준비가 필수입니다. 이번 블로그 포스트에서는 여행자가 가져가야 할 10가지 필수 아이템을 상세히 소개합니다. 첫째, 편안한 여행을 위한 양질의 여행 가방. 두번째는 다양한...",
            imageUrl: "./image/Hotpage1.png",
            user: {
                name: "고영희",
                image: "./image/Hotpage1.png"
            },
            date: "24-11-25",
            likes: 15,
            comments: 8
        }
    ];

    const handlePostSelection = (post) => {
        if (selectedPosts.includes(post.id)) {
            setSelectedPosts(selectedPosts.filter(p => p !== post.id));
        } else if (selectedPosts.length < 5) {
            setSelectedPosts([...selectedPosts, post.id]);
        }
    };

    return (
        <div style={{ marginTop: '70px' }}>
            <div>
                <div style={{ textAlign: 'center' }}>
                    <h2>Geport를 만들 포스트를 알려주세요</h2>
                    <p>포스트 5개를 선택해주세요</p>
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
                        style={{ 
                            marginLeft: '10px', 
                            borderRadius: '20px', 
                            padding: '5px 10px', 
                            backgroundColor: selectedPosts.length === 5 ? '#10901FC3' : '#d3d3d3', 
                            color: 'white',
                            border: 'none',
                            cursor: selectedPosts.length === 5 ? 'pointer' : 'not-allowed'
                        }}
                        disabled={selectedPosts.length !== 5}
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