import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";


export function LandingHeader(props){
    const navigate = useNavigate();

    const logoClick = () => {
        navigate("/");
    }

    const loginClick = () => {
        props.openModal()
    }

    useEffect(()=>{
        axios.get("/BE/api/geport/list",{
            withCredentials: true
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.error("There was an error making the request:", error);
            });
    },[])
    return (
        <div style={{alignItems: "center", justifyContent: "center", width: "100%", height: "480px"}}>
            <img src={"./image/Logo.png"} style={{position: "absolute", padding: "1%"}} onClick={logoClick}/>
            <button style={{
                position: "absolute", padding: "1%", top: "380px", left: "8%",
                background: "#1AE57C", borderRadius: "20px"
            }} onClick={loginClick}> 로그인 하기</button>
            <img src={"./image/LandingImage.png"} style={{width: "100%", height: "480px", display: "flex"}}/>
        </div>
    )
}

