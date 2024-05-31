import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Fix_Profile(props) {
    const [nickname, setNickname] = useState('');
    const [bio, setBio] = useState('');

    const handleSave = () => {
        // 프로필 수정 로직
    }

    const handleCancel = () => {
        // 취소 로직
    }

    const handleDeleteAccount = () => {
        // 회원탈퇴 로직
    }

    return (
        <div style={{ marginTop: '70px', textAlign: 'center' }}>
            <h1>프로필 편집</h1>
            <div>
                <img src="./image/type=profile_green.png" alt="Profile" style={{ width: '200px', height: '200px', borderRadius: '50%', marginTop: '30px'}} />
                <div style={{ marginTop: '30px' }}>
                    <button style={{ marginRight: '30px', marginBottom: '10px', borderRadius: '20px', padding: '5px 10px', backgroundColor: 'white',
                    color:'#10901FC3', border: '1px solid #10901FC3' }}>사진 수정</button>
                    <button style={{ marginBottom: '10px', borderRadius: '20px', padding: '5px 10px', backgroundColor: 'white',
                    color:'#10901FC3', border: '1px solid #10901FC3' }}>사진 삭제</button>
                </div>
            </div>
            <div style={{ marginTop: '20px', textAlign: 'left', display: 'inline-block' }}>
                <p style={{fontWeight:"bold"}}>기본 정보 편집</p>
                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <label style={{ marginRight: '30px' }}>닉네임</label>
                    <div style={{ position: 'relative', display: 'flex', width:'70%', alignItems: 'center', background: "#ccc", borderRadius: '50px', border: '1px solid #ccc', padding: '5px', height: '20px' }}>
                        <input type="text" placeholder="닉네임" style={{ background: "transparent", border: 'none', outline: 'none', flex: 1, height: '100%' }} />
                    </div>
                </div>
                <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <label style={{ marginRight: '50px' }}>바이오</label>
                    <div style={{ position: 'relative', display: 'flex', width:'70%', alignItems: 'center', background: "#ccc", borderRadius: '50px', border: '1px solid #ccc', padding: '5px', height: '20px' }}>
                        <input type="text" placeholder="바이오" style={{ background: "transparent", border: 'none', outline: 'none', flex: 1, height: '100%' }} />
                    </div>
                </div>
                <div style={{ padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
                    <p style={{fontWeight:"bold"}}>탈퇴</p>
                    <p>회원 탈퇴는 취소할 수 없습니다. 정말 탈퇴하시겠습니까?</p>
                    <button onClick={handleDeleteAccount} style={{ marginBottom: '10px', borderRadius: '20px', padding: '5px 10px', backgroundColor: 'white',
                    color:'#10901FC3', border: '1px solid #10901FC3' }}>회원탈퇴</button>
                </div>
            </div>
            <div>
                    <button onClick={handleSave} style={{ marginRight: '30px', marginBottom: '10px', borderRadius: '20px', padding: '5px 10px', backgroundColor: '#10901FC3',
                    color:'white', border: '1px solid #10901FC3', width:'150px' }}>프로필 수정</button>
                    <button onClick={handleCancel} style={{marginBottom: '10px', borderRadius: '20px', padding: '5px 10px', backgroundColor: 'white',
                    color:'#10901FC3', border: '1px solid #10901FC3', width:'150px' }}>취소</button>
                </div>
        </div>
    )
}