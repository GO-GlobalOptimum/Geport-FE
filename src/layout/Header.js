import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Header(props) {
    const navigate = useNavigate();

    const logoClick = () => {
        navigate("/");
    }

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={"./image/Logo.png"} style={{ marginRight: '10px', width: '150px', height: '30px', padding: "1%", cursor: "pointer", borderRadius: "5px" }} onClick={logoClick} />
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', background: "#ccc", borderRadius: '50px', border: '1px solid #ccc', padding: '5px', height: '20px' }}>
                        <img src={"./image/search.png"} alt="Search" style={{ marginRight: '5px', width: '20px', height: '20px', cursor: 'pointer' }} />
                        <input type="text" placeholder="검색어를 입력하세요" style={{ background: "transparent", border: 'none', outline: 'none', flex: 1, height: '100%' }} />
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button style={{ background: "#ccc", padding: '5px', borderRadius: '50px', border: '1px solid #ccc', display: 'flex', alignItems: 'center' }}>
                        <img src={"./image/pen.png"} alt="Pen" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                        글쓰기
                    </button>
                    <img src="./image/notification.png" alt="notification" style={{ width: '20px', height: '20px', marginLeft: '10px', marginRight: '5px' }} />
                    <img src="./image/user.png" alt="user" style={{ width: '20px', height: '20px', marginLeft: '10px', marginRight: '5px' }} />
                </div>
            </div>
        </div>
    )
}