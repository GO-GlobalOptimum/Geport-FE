import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export function RecommendSide(props) {

    const buttonContents = [
        '음악', '여행', '일본어', '테크', '생산성',
        '워킹홀리데이', '자기계발', 'IT', '프로그래밍'
    ];

    const RecentInquiry = [
        {
            id: 1,
            title: "고효율 작업을 위한 생산성 도구 추천",
            user: {
                name: "유현우",
                image: "./image/Hotpage1.png"
            },
            date: "23-01-20"
        },
        {
            id: 2,
            title: "창의성을 끌어올리는 방법 : 아이디어 발상 기술",
            user: {
                name: "고영희",
                image: "./image/Hotpage2.png"
            },
            date: "2023-11-20"
        },
    ]

    const RecommendFollows = [
        {
            id:1,
            user:{
                name: "조태완",
                image: "./image/Hotpage1.png",
                intro: "12년차 엔지니어, 최신 IT 트렌드를 전합니다."
            },
        },
        {
            id:2,
            user:{
                name: "기미진",
                image: "./image/Hotpage2.png",
                intro: "싱가폴, 요리, 그리고 고영희 두 마리(이건 좀 위험한디..?)."
            },
        },
    ]

    return (
        <div>
            <div style={{ width: "40px" }} />
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '70%' }}>
            <button style={{ background: "#ccc", padding: '5px', borderRadius: '50px', border: '1px solid #ccc', display: 'flex', alignItems: 'center' }}>
                <img src={"./image/pen.png"} alt="Pen" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                글쓰기
            </button>
                <img src="./image/notification.png" alt="notification" style={{ width: '20px', height: '20px', marginLeft: '10px', marginRight: '5px' }} />
                <img src="./image/user.png" alt="user" style={{ width: '20px', height: '20px', marginLeft: '10px', marginRight: '5px' }} />
            </div>
            <hr style={{ borderTop: '1px gray', width: '90%', paddingLeft: "5%" }} />
            <div>
                <p style={{ paddingLeft: "5%", marginRight: "40%", fontSize: '20px', fontWeight: 'bold' }}>추천 토픽</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', paddingLeft: '5%', maxWidth: '90%' }}>
                    {buttonContents.map((content, index) => (
                        <button key={index} style={{ marginRight: '10px', marginBottom: '10px', borderRadius: '20px', padding: '5px 10px', backgroundColor: '#91F5C3C3', border: 'none' }}>
                            {content}
                        </button>
                    ))}
                </div>
                <p style={{ paddingLeft: "5%", marginRight: "40%", fontSize: '10px', fontWeight: 'bold', color: 'green' }}>추천토픽 더보기</p>
            </div>
            <br />
            <div>
                <p style={{ paddingLeft: "5%", marginRight: "40%", fontSize: '20px', fontWeight: 'bold' }}>최근 조회</p>
                {RecentInquiry.slice(0, 2).map(inquiry => (
                    <div key={inquiry.id}>
                        <div>
                            <text style={{ paddingLeft: "5%", fontSize: '15px', fontWeight: 'bold' }}>{inquiry.title}</text>
                        </div>
                        <div style={{ paddingLeft: "5%", display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <img src={inquiry.user.image} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                            <p>{inquiry.user.name}</p>
                            <p style={{ marginLeft: '20px' }}>{inquiry.date}</p>
                        </div>
                    </div>
                ))}
                <p style={{ paddingLeft: "5%", marginRight: "40%", fontSize: '10px', fontWeight: 'bold', color: 'green' }}>최근 조회 더보기</p>
            </div>
            <br />
            <div>
                <p style={{ paddingLeft: "5%", marginRight: "40%", fontSize: '20px', fontWeight: 'bold' }}>팔로우 추천</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', paddingLeft: '5%', maxWidth: '90%' }}>
                    {RecommendFollows.slice(0, 2).map(follow => (
                        <div key={follow.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={follow.user.image} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
                                <div>
                                    <p style={{ fontWeight: 'bold' }}>{follow.user.name}</p>
                                    <p style={{ fontSize: '12px' }}>{follow.user.intro}</p>
                                </div>
                            </div>
                            <button style={{ padding: '5px 10px', borderRadius: '20px', backgroundColor: '#DDDDDD', border: 'none' }}>팔로우</button>
                        </div>
                    ))}
                </div>
                <p style={{ paddingLeft: "5%", marginRight: "40%", fontSize: '10px', fontWeight: 'bold', color: 'green' }}>팔로우 추천 더보기</p>
            </div>
        </div>
    )
}