import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";

export function MyInfo(props){
    const navigate = useNavigate();

    const logoClick = () => {
        navigate("/");
    }

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
            title: "고효율 작업을 위한 생산성 도구 추천",
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
            title: "고효율 작업을 위한 생산성 도구 추천",
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

    return(
        <div>
            <div>
                <img src={"./image/Hotpage1.png"} style={{  width: '150px', height: '150px', borderRadius: '50%', padding: "5%", cursor: "pointer", marginTop:'70px' }} />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ paddingLeft: "5%", marginRight: "40%", fontSize: '24px' , fontWeight: 'bold'}}>유현우 님</p>
                        <button style={{ marginRight: '10px', marginBottom: '10px', borderRadius: '20px', padding: '5px 10px', backgroundColor: '#91F5C3C3', border: 'none' ,display: 'flex', alignItems: 'center' }}>
                        <img src={"./image/Geport_green.png"} alt="Pen" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                        나의 Geport</button>
                    </div>
                <text style={{paddingLeft: "5%"}}>바이오 약 한 줄, 당신의 이야기를 빛나게 해줄 Geport</text>
            </div>
            <div>
                <br />
                <br />
                <br />
                <text style={{paddingLeft: "5%", fontSize: '20px' , fontWeight: 'bold'}}>내가 쓴 게시글</text>
                <hr style={{ borderTop: '1px gray', marginTop: '10px', width: '80%', paddingLeft: "5%"}} />
                    {/* 게시글 목록 공간이여 */}
                    <div style={{paddingLeft: "5%", width: '90%', maxHeight: '350px', overflowY: 'scroll' }}>
                        <div>
                        {myposts.map(post => (
                        <div key={post.id} style={{ marginBottom: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <div style={{ marginRight: '10px', flex: '1' }}>
                                    <h3>{post.title}</h3>
                                    <p>{post.content.substring(0, 255)}</p>
                                </div>
                                <div style={{ marginRight: '10px' }}>
                                <button style={{ marginRight: '10px', marginBottom: '10px', borderRadius: '20px', padding: '5px 10px', backgroundColor: '#91F5C3C3', border: 'none' ,display: 'flex', alignItems: 'center' }}>
                                    <img src={"./image/Geport_green.png"} alt="Pen" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                                    Geport 첨부</button>
                                </div>
                                <div>
                                    <img src={post.imageUrl} alt="Post" style={{ maxHeight: '150px', maxWidth: '150px' }} />
                                </div>
                            </div>
                            <div style={{display:'flex', alignItems: 'center'}}>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                <img src={post.user.image} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                                <p>{post.user.name}</p>
                                <p style={{ marginLeft: '20px' }}>{post.date}</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px',  marginLeft: 'auto'  }}>
                                <img src="./image/heart.png" alt="Likes" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                                {post.likes}
                                <img src="./image/comment.png" alt="Comments" style={{ width: '20px', height: '20px', marginLeft: '10px', marginRight: '5px' }} />
                                {post.comments}
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