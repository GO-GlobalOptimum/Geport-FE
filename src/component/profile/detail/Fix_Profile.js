import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Fix_Profile(props) {
    const [nickname, setNickname] = useState('');
    const [bio, setBio] = useState('');
    const [mbti, setMbti] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [photoPreview, setPhotoPreview] = useState('./image/type=profile_green.png');
    const navigate = useNavigate();

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePhoto(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    const postApi = (profileData) => {
        axios.post("http://localhost:8080/spring/user/myInfo", profileData, {
            headers: {
                Authorization: `Bearer ${props.token}`
            },
            withCredentials: true
        })
            .then(res => {
                console.log(res.data);
                navigate("/mypage"); // 프로필 수정이 성공하면 메인 페이지로 이동
            })
            .catch(error => {
                console.error("There was an error making the request:", error);
            });
    };

    const handleSave = () => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const profileData = {
                id: 5,
                name: nickname,
                bio: bio,
                phone: phoneNumber,
                mbti: mbti,
                age: parseInt(age, 10),
                gender: gender,
                profilePhoto: reader.result
            };

            postApi(profileData);
        };

        if (profilePhoto) {
            reader.readAsDataURL(profilePhoto);
        } else {
            const profileData = {
                id: 5,
                name: nickname,
                bio: bio,
                phone: phoneNumber,
                mbti: mbti,
                age: parseInt(age, 10),
                gender: gender,
                profilePhoto: null
            };
            postApi(profileData);
        }
    }

    const handleCancel = () => {
        navigate(-1);
    }

    const handleDeleteAccount = () => {
        axios.delete("https://geport.blog/spring/user/myInfo", {
            withCredentials: true
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.error("There was an error deleting the account:", error);
        });
    }

    return (
        <div style={{ marginTop: '70px', textAlign: 'center' }}>
            <h1>프로필 편집</h1>
            <div>
                <img src={photoPreview} alt="Profile" style={{ width: '200px', height: '200px', borderRadius: '50%', marginTop: '30px' }} />
                <div style={{ marginTop: '30px' }}>
                    <input type="file" onChange={handlePhotoChange} style={{ display: 'none' }} id="profilePhotoInput" />
                    <button onClick={() => document.getElementById('profilePhotoInput').click()} style={{ marginRight: '30px', marginBottom: '10px', borderRadius: '20px', padding: '5px 10px', backgroundColor: 'white', color: '#10901FC3', border: '1px solid #10901FC3' }}>사진 수정</button>
                    <button onClick={() => {
                        setProfilePhoto(null);
                        setPhotoPreview('./image/type=profile_green.png');
                    }} style={{ marginBottom: '10px', borderRadius: '20px', padding: '5px 10px', backgroundColor: 'white', color: '#10901FC3', border: '1px solid #10901FC3' }}>사진 삭제</button>
                </div>
            </div>
            <div style={{ marginTop: '20px', textAlign: 'left', display: 'inline-block' }}>
                <p style={{fontWeight: "bold"}}>기본 정보 편집</p>
                <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <label style={{ marginRight: '30px' }}>닉네임</label>
                    <div style={{ position: 'relative', display: 'flex', width: '70%', alignItems: 'center', background: "#ccc", borderRadius: '50px', border: '1px solid #ccc', padding: '5px', height: '30px' }}>
                        <input type="text" placeholder="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} style={{ background: "transparent", border: 'none', outline: 'none', flex: 1, height: '100%' }} />
                    </div>
                </div>
                <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <label style={{ marginRight: '50px' }}>바이오</label>
                    <div style={{ position: 'relative', display: 'flex', width: '70%', alignItems: 'center', background: "#ccc", borderRadius: '50px', border: '1px solid #ccc', padding: '5px', height: '30px' }}>
                        <input type="text" placeholder="바이오" value={bio} onChange={(e) => setBio(e.target.value)} style={{ background: "transparent", border: 'none', outline: 'none', flex: 1, height: '100%' }} />
                    </div>
                </div>
                <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <label style={{ marginRight: '30px' }}>MBTI</label>
                    <div style={{ position: 'relative', display: 'flex', width: '70%', alignItems: 'center', background: "#ccc", borderRadius: '50px', border: '1px solid #ccc', padding: '5px', height: '30px' }}>
                        <input type="text" placeholder="MBTI" value={mbti} onChange={(e) => setMbti(e.target.value)} style={{ background: "transparent", border: 'none', outline: 'none', flex: 1, height: '100%' }} />
                    </div>
                </div>
                <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <label style={{ marginRight: '50px' }}>나이</label>
                    <div style={{ position: 'relative', display: 'flex', width: '70%', alignItems: 'center', background: "#ccc", borderRadius: '50px', border: '1px solid #ccc', padding: '5px', height: '30px' }}>
                        <input type="text" placeholder="나이" value={age} onChange={(e) => setAge(e.target.value)} style={{ background: "transparent", border: 'none', outline: 'none', flex: 1, height: '100%' }} />
                    </div>
                </div>
                <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <label style={{ marginRight: '30px' }}>성별</label>
                    <div style={{ position: 'relative', display: 'flex', width: '70%', alignItems: 'center', background: "#ccc", borderRadius: '50px', border: '1px solid #ccc', padding: '5px', height: '30px' }}>
                        <select value={gender} onChange={(e) => setGender(e.target.value)} style={{ background: "transparent", border: 'none', outline: 'none', flex: 1, height: '100%' }}>
                            <option value="">성별 선택</option>
                            <option value="남">남</option>
                            <option value="여">여</option>
                        </select>
                    </div>
                </div>
                <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <label style={{ marginRight: '30px' }}>전화번호</label>
                    <div style={{ position: 'relative', display: 'flex', width: '70%', alignItems: 'center', background: "#ccc", borderRadius: '50px', border: '1px solid #ccc', padding: '5px', height: '30px' }}>
                        <input type="text" placeholder="전화번호" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={{ background: "transparent", border: 'none', outline: 'none', flex: 1, height: '100%' }} />
                    </div>
                </div>
                <div style={{ padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
                    <p style={{fontWeight: "bold"}}>탈퇴</p>
                    <p>회원 탈퇴는 취소할 수 없습니다. 정말 탈퇴하시겠습니까?</p>
                    <button onClick={handleDeleteAccount} style={{ marginBottom: '10px', borderRadius: '20px', padding: '5px 10px', backgroundColor: 'white', color: '#10901FC3', border: '1px solid #10901FC3' }}>회원탈퇴</button>
                </div>
            </div>
            <div>
                <button onClick={handleSave} style={{ marginRight: '30px', marginBottom: '10px', borderRadius: '20px', padding: '5px 10px', backgroundColor: '#10901FC3', color: 'white', border: '1px solid #10901FC3', width: '150px' }}>프로필 수정</button>
                <button onClick={handleCancel} style={{ marginBottom: '10px', borderRadius: '20px', padding: '5px 10px', backgroundColor: 'white', color: '#10901FC3', border: '1px solid #10901FC3', width: '150px' }}>취소</button>
            </div>
        </div>
    )
}
