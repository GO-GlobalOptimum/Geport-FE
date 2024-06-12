import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
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
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcxODIwMTAxMCwidHlwZSI6ImFjY2VzcyIsImVtYWlsIjoieW91aHl1bndvb0BnYWNob24uYWMua3IifQ.Nh33rcotajpSJvGieSfDePwmg5-IihHFPXiih6gbh6GHKWXfI62cHbi56nAlgnVpA3ClyUdAZJvxtgYRohEjBw'


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
                console.log(data)
                console.log("check")
                axios.post('/BE/fastapi/igeport/generate/', JSON.stringify(data), {
                    withCredentials: true,
                    headers: { "Content-Type": 'application/json', Authorization: `Bearer ${token}` }
                }).then(response=>{
                    console.log(response.data);
                    localStorage.setItem('result', JSON.stringify(response.data));
                    navigate('/igeport/result');
                });

                    // ['igeport_answer2', 'igeport_answer3', 'igeport_answer4', 'igeport_answer5', 'igeport_answer6']
                    // .forEach(cookieName => removeCookie(cookieName));
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