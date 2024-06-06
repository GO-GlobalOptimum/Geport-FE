import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import { Geport_question1 } from './detail/Geport_question1';
import { Geport_question2 } from "./detail/Geport_question2";
import { Geport_question3 } from "./detail/Geport_question3";
import { Geport_question4 } from "./detail/Geport_question4";
import { Geport_question5 } from "./detail/Geport_question5";
import { Geport_question6 } from "./detail/Geport_question6";
import { getCookie, removeCookie } from '../../function/cookies';

export function Geport_question() {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const selectedPosts = Cookies.get('selected_posts')?.split(',') || [];

    const nextPage = useCallback(() => {
        if (currentPage < 6) {
            setCurrentPage(prev => prev + 1);
        } else if (currentPage === 6) {
            setCurrentPage(7);
        }
    }, [currentPage]);

    useEffect(() => {
        if (currentPage === 7) {
            const sendResultsToBackend = async () => {
                const answers = {
                    answer1: getCookie('geport_answer1'),
                    answer2: getCookie('geport_answer2'),
                    answer3: getCookie('geport_answer3'),
                    answer4: getCookie('geport_answer4'),
                    answer5: getCookie('geport_answer5'),
                    answer6: getCookie('geport_answer6')
                };

                try {
                    const response = await axios.post('/BE/fastapi/geport/generate', answers, {
                        withCredentials: true,
                        headers: { "Content-Type": 'application/json' }
                    });
                    console.log('Response data:', response.data);

                    ['geport_answer1', 'geport_answer2', 'geport_answer3', 'geport_answer4', 'geport_answer5', 'geport_answer6']
                        .forEach(cookieName => removeCookie(cookieName));

                    navigate('/geport/result');
                } catch (error) {
                    console.error('Error sending data to backend:', error);
                }
            };

            sendResultsToBackend();
        }
    }, [currentPage, navigate]);

    return (
        <div>
            {currentPage === 1 && <Geport_question1 nextPage={nextPage} />}
            {currentPage === 2 && <Geport_question2 nextPage={nextPage} />}
            {currentPage === 3 && <Geport_question3 nextPage={nextPage} />}
            {currentPage === 4 && <Geport_question4 nextPage={nextPage} />}
            {currentPage === 5 && <Geport_question5 nextPage={nextPage} />}
            {currentPage === 6 && <Geport_question6 nextPage={nextPage} />}
        </div>
    );
}
