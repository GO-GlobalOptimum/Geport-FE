import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {Geport_result1} from "./detail/Geport_result1";
import {Geport_result2} from "./detail/Geport_result2";
import {Geport_result3} from "./detail/Geport_result3";
import {Geport_result4} from "./detail/Geport_result4";
import {Geport_result5} from "./detail/Geport_result5";
import {Geport_result7} from "./detail/Geport_result7";
import {Geport_result6} from "./detail/Geport_result6";
import {Geport} from "../Geport/Geport";
export function Geport_result() {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const nextPage = () => {
        if (currentPage < 8) {
            setCurrentPage(prev => prev + 1);
        } else {
            navigate('/userinfo');
        }
    };

    const renderPage = () => {
        switch (currentPage) {
            case 1:
                return <Geport_result1 nextPage={nextPage} />;
            case 2:
                return <Geport_result2 nextPage={nextPage}/>;
            case 3:
                return <Geport_result3 nextPage={nextPage}/>;
            case 4:
                return <Geport_result4 nextPage={nextPage}/>;
            case 5:
                return <Geport_result5 nextPage={nextPage}/>;
            case 6:
                return <Geport_result6 nextPage={nextPage}/>;
            case 7:
                return <Geport_result7 nextPage={nextPage}/>;
            default:
                return <Geport nextPage={nextPage}/>;
        }
    };

    return (
        <div>
            {renderPage()}
        </div>
    );
}