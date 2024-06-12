import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import { Igeport_question1 } from './detail/Igeport_question1';
import { Igeport_question2 } from './detail/Igeport_question2';
import { Igeport_question3 } from './detail/Igeport_question3';
import { Igeport_question4 } from './detail/Igeport_question4';
import { Igeport_question5 } from "./detail/Igeport_question5";
import { Igeport_question6 } from "./detail/Igeport_question6";
import { getCookie, removeCookie } from '../../function/cookies';
import { setCookie } from '../../function/cookies';

export function Igeport_question() {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    //const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsIm5hbWUiOiIxMTUxMDY0NzA2NjMyNjUyNjA2MTQiLCJleHAiOjE3NTQwOTQ1NjMsInR5cGUiOiJhY2Nlc3MiLCJlbWFpbCI6InRha3kwMzE1QGdhY2hvbi5hYy5rciJ9.Epm6rwpFJLTvPIqWIFvr_dsdW75_5hZOpInHtgnOBSozXe8hHiKTK3dfar2bJ3V2M89msTaNsXRCNgrlUgsWtQ'
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcxODE4NDY1NywidHlwZSI6ImFjY2VzcyIsImVtYWlsIjoieW91aHl1bndvb0BnYWNob24uYWMua3IifQ.IMpqmTLzUpdpnxS__K5fBv3r_NKW1NCaeefmep4hg0mzG3DXDeVMmVc7yVx0y9TketD3jZhwZM1RLtHrzsanwQ'


    const nextPage = useCallback((data) => {
        // 현재 페이지의 데이터를 쿠키에 저장
        console.log(data)
        setCookie(`igeport_answer${currentPage}`, data, { path : '/' });

        if (currentPage < 6) {
            setCurrentPage(prev => prev + 1);
        } else {
            setCurrentPage(7);
        }
    }, [currentPage]);

    // console.log(getCookie('selected_posts').split(',').map(Number));

    useEffect(() => {
        if (currentPage == 7) {
            const sendResultsToBackend = async () => {
                const data = {
                    post_ids: getCookie('selected_posts').split(',').map(Number),
                    questions: [getCookie('igeport_answer2'), getCookie('igeport_answer3'), getCookie('igeport_answer4'), getCookie('igeport_answer5'), getCookie('igeport_answer6')]
                }
                console.log(data.questions)
                console.log("check")
                try {
                    const response = await axios.post('/BE/fastapi/igeport/generate/', JSON.stringify(data), {
                        withCredentials: true,
                        //headers: { "Content-Type": 'application/json', Authorization: `Bearer ${token}` }
                    }); 
                    console.log(response.data);
                    // setCookie('igeport-result', response.data, { path : '/' })

                    //     ['igeport_answer2', 'igeport_answer3', 'igeport_answer4', 'igeport_answer5', 'igeport_answer6']
                    //     .forEach(cookieName => removeCookie(cookieName));


                    navigate('/igeport/result');
                } catch (error) {
                    console.error('Error sending data to backend:', error);
                }
            };

            sendResultsToBackend();
        }
    }, [currentPage, navigate]);

    const renderPage = () => {
        switch (currentPage) {
            case 1:
                return <Igeport_question1 nextPage={nextPage} />;
            case 2:
                return <Igeport_question2 nextPage={nextPage} />;
            case 3:
                return <Igeport_question3 nextPage={nextPage} />;
            case 4:
                return <Igeport_question4 nextPage={nextPage} />;
            case 5:
                return <Igeport_question5 nextPage={nextPage} />;
            case 6:
                return <Igeport_question6 nextPage={nextPage} />;
            default:
                return <Igeport_question1 nextPage={nextPage} />;
        }
    };

    return (
        <div>
            {renderPage()}
        </div>
    );
}