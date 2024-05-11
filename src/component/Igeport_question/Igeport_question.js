import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Igeport_question1 } from './detail/Igeport_question1';
import { Igeport_question2 } from './detail/Igeport_question2';
import { Igeport_question3 } from './detail/Igeport_question3';
import { Igeport_question4 } from './detail/Igeport_question4';
import {Igeport_question5} from "./detail/Igeport_question5";
import {Igeport_question6} from "./detail/Igeport_question6";
export function Igeport_question() {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const nextPage = () => {
        if (currentPage < 6) {
            setCurrentPage(prev => prev + 1);
        } else {
            navigate('/userinfo');
        }
    };

    const renderPage = () => {
        switch (currentPage) {
            case 1:
                return <Igeport_question1 nextPage={nextPage} />;
            case 2:
                return <Igeport_question2 nextPage={nextPage} />;
            case 3:
                return <Igeport_question3 nextPage={nextPage}/>;
            case 4:
                return <Igeport_question4 nextPage={nextPage}/>
            case 5:
                return <Igeport_question5 nextPage={nextPage}/>;
            case 6:
                return <Igeport_question6 nextPage={nextPage}/>;
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