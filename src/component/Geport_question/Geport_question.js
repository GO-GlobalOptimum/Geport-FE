import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Geport_question1 } from './detail/Geport_question1';
import { Geport_question2 } from './detail/Geport_question2';
import { Geport_question3 } from './detail/Geport_question3';
import { Geport_question4 } from './detail/Geport_question4';
import { Geport_question5 } from "./detail/Geport_question5";
import { Geport_question6 } from "./detail/Geport_question6";
import { getCookie, removeCookie, setCookie } from '../../function/cookies';
import { Geport_result } from '../Geport_result/Geport_result';

export function Geport_question() {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsIm5hbWUiOiIxMDcyNzQwMTQzMTAwMzk3MDQzMDMiLCJleHAiOjE3NTQyMDIwNDAsInR5cGUiOiJhY2Nlc3MiLCJlbWFpbCI6InlvdWh5dW53b29AZ2FjaG9uLmFjLmtyIn0.tJMsiu4XVZQuOJtMG7XDGXkixgNPx5hyj44-tudjk-qwMu0AEsiep00-GbdCJrpBLZCVdgCGsPNBCyn2WncVqw';

    const nextPage = useCallback((data) => {
        // Ensure data is a simple value and not an event or DOM element
        console.log(data);

        setCookie(`geport_answer${currentPage}`, data, { path: '/' });

        if (currentPage < 6) {
            setCurrentPage(prev => prev + 1);
        } else {
            setCurrentPage(7);
        }
    }, [currentPage]);

    useEffect(() => {
        const sendResultsToBackend = async () => {
            if (currentPage === 7) {
                const data = {
                    post_ids: getCookie('selected_posts').split(',').map(Number),
                    questions: [
                        getCookie('geport_answer2'),
                        getCookie('geport_answer3'),
                        getCookie('geport_answer4'),
                        getCookie('geport_answer5'),
                        getCookie('geport_answer6')
                    ]
                };
                console.log(data);
                console.log("check");
                try {
                    axios.post('/API/fastapi/geport/generate/', JSON.stringify(data), {
                        withCredentials: true,
                        headers: { "Content-Type": 'application/json', Authorization: `Bearer ${token}` }
                    }).then(response=>{
                        console.log(response.data);
                        localStorage.setItem('result', JSON.stringify(response.data));
                        navigate('/geport/result');
                    })
                } catch (error) {
                    console.error("Error sending results to backend", error);
                }
            }
        };

        sendResultsToBackend();
    }, [currentPage, navigate]);

    const renderPage = () => {
        switch (currentPage) {
            case 1:
                return <Geport_question1 nextPage={nextPage} />;
            case 2:
                return <Geport_question2 nextPage={nextPage} />;
            case 3:
                return <Geport_question3 nextPage={nextPage} />;
            case 4:
                return <Geport_question4 nextPage={nextPage} />;
            case 5:
                return <Geport_question5 nextPage={nextPage} />;
            case 6:
                return <Geport_question6 nextPage={nextPage} />;
            default:
                return (<div style={{backgroundColor: "#1E1E1E",display: "flex",alignContent:"center",
                    justifyContent:"center", fontWeight: "bold"}}>
                    Loading.. </div>);
        }
    };

    return (
        <div>
            {renderPage()}
        </div>
    );
}
