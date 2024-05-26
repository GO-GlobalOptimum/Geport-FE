import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {IGeport_result1} from "./detail/IGeport_result1";
import {IGeport} from "../Igeport/IGeport";
import {IGeport_result2} from "./detail/IGeport_result2";
import {IGeport_result3} from "./detail/IGeport_result3";
import {Geport_result4} from "../Geport_result/detail/Geport_result4";
import {IGeport_result4} from "./detail/IGeport_result4";
import {IGeport_result5} from "./detail/IGeport_result5";
import {IGeport_result6} from "./detail/IGeport_result6";
import {IGeport_result7} from "./detail/IGeport_result7";
export function IGeport_result() {
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
                return <IGeport_result1 nextPage={nextPage} />;
            case 2:
                return <IGeport_result2 nextPage={nextPage}/>;
            case 3:
                return <IGeport_result3 nextPage={nextPage}/>;
            case 4:
                return <IGeport_result4 nextPage={nextPage}/>;
            case 5:
                 return <IGeport_result5 nextPage={nextPage}/>;
            case 6:
                 return <IGeport_result6 nextPage={nextPage}/>;
            case 7:
                 return <IGeport_result7 nextPage={nextPage}/>;
            default:
                return <IGeport nextPage={nextPage}/>;
        }
    };

    return (
        <div>
            {renderPage()}
        </div>
    );
}