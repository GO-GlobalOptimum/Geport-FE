import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Geport_question1 } from './detail/Geport_question1';
import {Geport_question2} from "./detail/Geport_question2";
import {Geport_question3} from "./detail/Geport_question3";
import {Geport_question4} from "./detail/Geport_question4";
import {Geport_question5} from "./detail/Geport_question5";
import {Geport_question6} from "./detail/Geport_question6";
export function Geport_question() {
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
                return <Geport_question1 nextPage={nextPage} />;
            case 2:
                return <Geport_question2 nextPage={nextPage}/>;
            case 3:
                return <Geport_question3 nextPage={nextPage}/>;
            case 4:
                return <Geport_question4 nextPage={nextPage}/>;
            case 5:
                return <Geport_question5 nextPage={nextPage}/>;
            case 6:
                return <Geport_question6 nextPage={nextPage}/>;
            default:
                return <Geport_question nextPage={nextPage}/>;
        }
    };

    return (
        <div>
            {renderPage()}
        </div>
    );
}