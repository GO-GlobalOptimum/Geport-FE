import React from 'react';
import { useNavigate } from "react-router-dom";

export function LoginPage(props) {
    const navigate = useNavigate();

    const googleLogin = (event) => {
        
        event.preventDefault();
        console.log("Google Login");
        window.location.href = process.env.REACT_APP_GOOGLE_LOGIN_URL

    };

    return (
        <div style={{
            marginLeft: "170px", marginRight: "170px", marginTop: "130px", marginBottom: "130px",
            alignItems: "center", justifyContent: "center"
        }}>
            <div style={{ textAlign: "center", fontStyle: "bold", fontWeight: "600", fontSize: "24px" }}>
                로그인 하기
            </div>
            <div style={{ height: "80px" }} />
            <div style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                <button style={{
                    width: "100%", height: "50px", backgroundColor: "#3B5998", color: "white",
                    borderRadius: "5px", border: "none", fontSize: "16px"
                }}
                    onClick={googleLogin}>
                    구글으로 로그인
                </button>
            </div>
            <div style={{ height: "80px" }} />
            <div style={{ textAlign: "center", fontWeight: "300", fontSize: "17px" }}>
                Geport는 퍼스널 브랜딩 중심 블로그 서비스입니다. <br />
                원활한 서비스 이용을 위해 구글 로그인을 권장합니다. <br />
                로그인 이력이 없을 경우 자동 회원가입됩니다.
            </div>
        </div>
    );
}