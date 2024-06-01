import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from "react-router-dom";
import {GoogleOAuthProvider, GoogleLogin} from "@react-oauth/google";


export function SignUpPage(props){

    const navigate = useNavigate();
    const [checkboxes, setCheckboxes] = useState({
        option1: false,
        option2: false
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [name]: checked
        }));
    };

    const allChecked = Object.values(checkboxes).every(Boolean);

    const handleNextClick = () => {
        if (allChecked) {
            console.log('All checkboxes are checked. Moving to the next step.');
            // 다음 단계로 이동하는 로직 추가
            // props.onClose()
            navigate("/mainpage")
        }
    };

    return(
        <div style={{
            marginLeft: "170px", marginRight: "170px", marginTop: "130px", marginBottom: "130px",
            alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column"
        }}>
            <div style={{textAlign: "center", fontStyle: "bold", fontSize: "22px"}}>
                회원가입 하기
            </div>
            <div style={{height: "40px"}}/>
            <div style={{alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column"}}>
                <label style={{width: "250px", height: "60px", fontSize: "14px"}}>
                    <input
                        type="checkbox"
                        name="option1"
                        checked={checkboxes.option1}
                        onChange={handleCheckboxChange}
                        style={{marginRight:"10px"}}
                    />
                    이용약관에 동의합니다.
                </label>
                <label style={{width: "250px", height: "60px", fontSize: "14px"}}>
                    <input
                        type="checkbox"
                        name="option2"
                        checked={checkboxes.option2}
                        onChange={handleCheckboxChange}
                        style={{marginRight:"10px"}}
                    />
                    개인정보 처리 방침에 동의합니다.
                </label>
            </div>
            <div style={{height: "20px"}}/>
            <div style={{textAlign: "center", fontSize: "14px", marginBottom: "20px"}}>
                원활한 Geport 이용을 위해 <br/>
                이용약관과 개인정보 처리방침을 확인해주세요.
            </div>
            <div onClick={handleNextClick}
                    style={{backgroundColor : !allChecked ? "#EBEBEB" : "#1AE57C",
                            width: "130px", height: "40px", borderRadius: "20px",
                            alignItems: "center", justifyContent: "center", display:"flex"}}>
                <div style={{fontSize: "14px"}}>Geport 시작하기</div>
            </div>
        </div>
    )
}
