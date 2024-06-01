import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Header(props) {
    const navigate = useNavigate();
    
    const [showNotificationMenu, setShowNotificationMenu] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);

    const logoClick = () => {
        navigate("/");
    }

    const createPost = () => {
        navigate("/create_post");
    }

    const toggleNotificationMenu = () => {
        setShowNotificationMenu(prev => !prev);
        setShowUserMenu(false); // 유저 메뉴가 열려 있을 때는 닫는다.
    }

    const toggleUserMenu = () => {
        setShowUserMenu(prev => !prev);
        setShowNotificationMenu(false); // 알림 메뉴가 열려 있을 때는 닫는다.
    }

    return (
        <div>
            <div style={{position:'fixed', width:'100%', padding: '1rem', color: 'white', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: '999' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={"./image/Logo.png"} style={{ marginRight: '10px', width: '150px', height: '30px', padding: "1%", cursor: "pointer", borderRadius: "5px" }} onClick={logoClick} />
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', background: "#ccc", borderRadius: '50px', border: '1px solid #ccc', padding: '5px', height: '20px' }}>
                        <img src={"./image/search.png"} alt="Search" style={{ marginRight: '5px', width: '20px', height: '20px', cursor: 'pointer' }} />
                        <input type="text" placeholder="검색어를 입력하세요" style={{ background: "transparent", border: 'none', outline: 'none', flex: 1, height: '100%' }} />
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px'}}>
                    <button style={{ background: "#ccc", padding: '5px', borderRadius: '50px', border: '1px solid #ccc', display: 'flex', alignItems: 'center' }} onClick={createPost}>
                        <img src={"./image/pen.png"} alt="Pen" style={{ width: '20px', height: '20px', marginRight: '5px' }}/>
                        글쓰기
                    </button>
                    <div style={{ position: 'relative' }}>
                        <img src="./image/notification.png" alt="notification" style={{ width: '20px', height: '20px', marginLeft: '10px', marginRight: '5px', cursor: 'pointer' }} onClick={toggleNotificationMenu} />
                        {showNotificationMenu && (
                            <div style={{ position: 'absolute', top: '30px', right: '0', background: 'white', border: '1px solid #ccc', borderRadius: '5px', padding: '20px', width: '200px', color:'black' }}>
                                <p>김영인 님이 내 포스트에 좋아요를 눌렀습니다.</p>
                                <p>현지수 님이 내 포스트에 댓글을 남겼습니다.</p>
                                <p>Geport 생성이 완료되었습니다. 나만의 Geport를 확인해보세요!
                                </p>
                            </div>
                        )}
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img src="./image/user.png" alt="user" style={{ width: '20px', height: '20px', marginLeft: '10px', marginRight: '5px', cursor: 'pointer' }} onClick={toggleUserMenu} />
                        {showUserMenu && (
                            <div style={{ position: 'absolute', top: '30px', right: '0', background: 'white', border: '1px solid #ccc', borderRadius: '5px', padding: '20px', width: '150px', color:'black'}}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src="./image/type=profile.png" alt="User" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                                    <p>내 블로그</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center'}}>
                                    <img src="./image/type=bookmark.png" alt="Mybookmark" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                                    <p>내 북마크</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center'}}>
                                    <img src="./image/type=chart.png" alt="User" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                                    <p>통계</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src="./image/type=setting.png" alt="User" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                                    <p>설정</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center'}}>
                                    <img src="./image/type=logout.png" alt="User" style={{ width: '30px', height: '30px',  marginRight: '10px' }} />
                                    <p>로그아웃</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}