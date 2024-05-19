import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from "react-router-dom";
import {GoogleOAuthProvider, GoogleLogin} from "@react-oauth/google";


export function SignUpPage(props){

    const navigate = useNavigate();

    // 응답 성공시 호출되는 콜백 함수
    const responseGoogle = (response) => {
        console.log(response);

    }

// 응답 실패시 호출되는 콜백 함수
    const handleFailure = (error) => {
        console.log(error);
    }

    useEffect(() => {
        console.log("Google Client ID:", process.env.REACT_APP_GOOGLE_OAUTH_ID);
    }, []);

    return(
        <div style={{marginLeft: "170px", marginRight: "170px", marginTop: "130px", marginBottom: "130px",
            alignItems: "center", justifyContent: "center"}}>
            <div style={{textAlign: "center", fontStyle: "bold", fontSize: "22px"}}>
                회원가입 하기
            </div>
            <div style={{height: "80px"}}/>
            <div style={{alignItems: "center", justifyContent: "center", display:"flex"}}>

            </div>
            <div style={{height: "80px"}}/>
            <div style={{textAlign: "center", fontSize: "14px"}}>
                원활한 Geport 이용을 위해 <br/>
                이용약관과 개인정보 처리방침을 확인해주세요.
            </div>
        </div>
    )
}