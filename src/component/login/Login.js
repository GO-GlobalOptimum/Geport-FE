import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Header} from "../../layout/Header";
import GoogleLogin from "@leecheuk/react-google-login";


export function Login(props){

    // 응답 성공시 호출되는 콜백 함수
    const responseGoogle = (response) => {
        console.log(response);
    }

// 응답 실패시 호출되는 콜백 함수
    const handleFailure = (error) => {
        console.log(error);
    }

    return(
        <div style={{marginLeft: "170px", marginRight: "170px", marginTop: "130px", marginBottom: "130px",
            alignItems: "center", justifyContent: "center"}}>
            <div style={{textAlign: "center", fontStyle: "bold", fontSize: "22px"}}>
                로그인 하기
            </div>
            <div style={{height: "80px"}}/>
            <div style={{alignItems: "center", justifyContent: "center", display:"flex"}}>
                <GoogleLogin
                    clientId="임의의 클라이언트 아이디"
                    onSuccess={responseGoogle}
                    onFailure={handleFailure}
                />
            </div>
            <div style={{height: "80px"}}/>
            <div style={{textAlign: "center", fontSize: "14px"}}>
                Geport는 퍼스널 브랜딩 중심 블로그 서비스입니다. <br/>
                원활한 서비스 이용을 위해 구글 로그인을 권장합니다. <br/>
                로그인 이력이 없을 경우 자동 회원가입됩니다.
            </div>
        </div>
    )
}