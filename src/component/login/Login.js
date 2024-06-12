import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Header} from "../../layout/Header";
import {GoogleOAuthProvider, GoogleLogin} from "@react-oauth/google";
import {LoginPage} from "./detail/LoginPage";
import {SignUpPage} from "./detail/SignUpPage";


export function Login(props){

    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);

    const toggleLogin = () => {
        setIsLogin(!isLogin);
    };

    return(
        <div>
            {isLogin ? <SignUpPage onClose={props.onClose}/> : <LoginPage toggleLogin={toggleLogin}/>}
        </div>
    )
}