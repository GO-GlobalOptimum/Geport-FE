import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";

export function Other_Posts(props){
    const navigate = useNavigate();

    const logoClick = () => {
        navigate("/");
    }

    const otherposts = [
        {
            id: 1,
            title: "새로운 취미 시작하기: 창작의 기쁨과 성취감",
            content: "여행은 새로운 경험과 추억을 선사하지만, 올바른 준비가 필수입니다. 이번 블로그 포스트에서는 여행자가 가져가야 할 10가지 필수 아이템을 상세히 소개합니다. 첫째, 편안한 여행을 위한 양질의 여행 가방. 두 번째는 다양한 환경에 대비할 수 있는 다용도 의류. 세 번째 아이템은 여행 중 긴급 상황에 대비한 응급 키트입니다. 네 번째는 휴대용 충전기와 보조 배터리로, 언제 어디서든 기기를 충전할 수 있게 해줍니다. 다섯 번째는 고성능 카메라로, 여행의 순간들을 아름답게 기록할 수 있습니다. 여섯 번째 아이템은 여행지의 날씨에 상관없이 편안한 여행을 돕는 다목적 신발. 일곱 번째는 여행 중 건강을 유지하기 위한 물병과 여행용 필터. 여덟 번째는 지역 정보와 지도가 포함된 스마트폰 앱, 나침반 또는 종이 지도, 아홉 번째는 여행지의 문화와 언어를 빠르게 파악할 수 있는 가이드북 또는 앱. 마지막으로, 여행의 편안함과 안전을 위한 개인 보안 아이템, 예를 들어, 도난 방지 가방이나 머니 벨트입니다. 이러한 아이템들은 여행자가 만날 수 있는 다양한 상황에 대비할 수 있게 하며, 여행을 더욱 풍부하고 안전하게 만들어 줍니다. 여행을 떠나기 전 이 목록을 체크하고, 최고의 여행 경험을 준비하세요!",
            imageUrl: "./image/trip.png",
            user: {
                name: "고영희",
                image: "./image/user.png"
            },
            date: "2024-05-20",
            likes: 10,
            comments: 5
        },
        {
            id: 2,
            title: "사회적 기업의 가치와 사회적 영향력",
            content: "자기 개발은 목표를 설정하고 달성하기 위한 여정입니다. 이 블로그 포스트에서는 일상 생활에 쉽게 통합할 수 있는 5가지 핵심 습관을 소개합니다. 첫 번째는 목표 설정과 시간 관리입니다. 이는 개인적 성취와 전문적 성장을 위한 기초를 마련합니다. 두 번째 습관은 긍정적 사고를 통한 자기 격려입니다. 이는 도전을 극복하고 성공으로 나아가는 데 중요합니다. 세 번째는 건강 유지를 위한 일상적인 운동과 균형 잡힌 식단입니다. 건강한 몸은 능률적인 마음의 기초입니다. 네 번째는 지속적인 학습과 자기 계발입니다. 새로운 기술과 지식은 경쟁력을 높이고 삶의 질을 향상시킵니다. 마지막으로 다섯 번째 습관은 일상 속에서의 작은 목표 달성을 통해 성취감을 느끼는 것입니다. 이러한 습관들은 개인의 성장과 발전에 필수적이며, 이 글을 통해 자기 계발의 길을 찾는데 도움을 줄 것입니다.",
            imageUrl: "./image/Hotpage1.png",
            user: {
                name: "신민수",
                image: "./image/user.png"
            },
            date: "2024-05-11",
            likes: 15,
            comments: 8
        },
        {
            id: 3,
            title: "고효율 작업을 위한 생산성 도구 추천",
            content: "생산성 도구를 사용하는 이유는 여러 가지가 있습니다. 그 중 주요 이유는 다음과 같습니다: 생산성 도구를 사용하면 시간을 관리하고 업무를 효율적으로 조직할 수 있습니다. 작업을 우선순위에 따라 정리하고 일정에 맞게 배치할 수 있어서 시간을 효과적으로 활용할 수 있습니다. 또한, 생산성 도구를 통해 작업을 관리하고 업무를 추적할 수 있습니다. 중요한 작업에 집중하고, 중요하지 않은 작업을 제거함으로써 생산성을 높일 수 있습니다. 생산성 도구는 협업과 팀 커뮤니케이션을 강화하는 데에도 도움이 됩니다. 팀원들과 실시간으로 소통하고 파일을 공유하며 업무를 할당할 수 있어서 효율적인 협업이 가능합니다. 또한, 생산성 도구를 사용하면 정보를 효율적으로 관리하고 문서화할 수 있습니다. 필요한 정보를 빠르게 검색하고 필요한 때에 접근할 수 있어서 업무 효율을 높일 수 있습니다. 마지막으로, 생산성 도구를 사용하면 일상적이고 반복적인 작업을 자동화하여 업무 처리 시간을 단축할 수 있습니다. 자동화된 작업은 실수를 줄이고 업무 처리 속도를 향상시켜줍니다. 이러한 이유들로 생산성 도구는 업무 효율을 높이고 업무를 조직화하는 데에 매우 유용합니다.",
            imageUrl: "./image/Hotpage1.png",
            user: {
                name: "나선욱",
                image: "./image/user.png"
            },
            date: "24-05-25",
            likes: 12,
            comments: 8
        }
    ];

    return(
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginTop:'10px' }}>
                    <img src={"./image/Logo.png"} style={{ marginRight: '10px', width: '150px', height: '30px', padding: "1%", cursor: "pointer", borderRadius: "5px" }} onClick={logoClick} />
                    <div style={{ display: 'flex', alignItems: 'center', background: "#ccc", borderRadius: '50px', border: '1px solid #ccc', padding: '5px', height: '30px', flex: 1 }}>
                        <img src={"./image/search.png"} alt="Search" style={{ marginRight: '5px', width: '20px', height: '20px', cursor: 'pointer' }} />
                        <input type="text" placeholder="검색어를 입력하세요" style={{ background: "transparent", border: 'none', outline: 'none', flex: 1, height: '100%' }} />
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="./image/notification.png" alt="notification" style={{ width: '20px', height: '20px', marginRight: '20px' }} />
                    <img src="./image/user.png" alt="user" style={{ width: '20px', height: '20px', marginRight: '20px' }} />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {/* 게시글 목록 공간이여 */}
                    <div style={{ width: '50%', marginTop:'30px'}}>
                        <div>
                            {otherposts.map(post => (
                            <div key={post.id} style={{ marginBottom: '20px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    <div style={{ marginRight: '10px', flex: '1' }}>
                                        <h3 style={{ fontSize: '48px' }}>{post.title}</h3>
                                        <div key={post.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <img src={post.user.image} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
                                                <div>
                                                    <p style={{ fontWeight: 'bold' }}>{post.user.name}</p>
                                                    <p style={{ fontSize: '14px', marginTop:'-10px' }}>{post.date}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <button style={{ padding: '5px 10px', borderRadius: '20px', backgroundColor: '#DDDDDD', border: 'none' }}>팔로우</button>
                                            </div>
                                        </div>
                                        <p style={{ fontSize: '14px', letterSpacing: '0.8px', lineHeight: '30px' }}>{post.content}</p>
                                        <img src={post.imageUrl} alt="Post" style={{ width: '100%' }} />
                                        <p style={{ fontSize: '14px', letterSpacing: '0.8px', lineHeight: '30px' }}>{post.content}</p>
                                    </div>
                                </div>
                                <div style={{display:'flex', alignItems: 'center'}}>
                                
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