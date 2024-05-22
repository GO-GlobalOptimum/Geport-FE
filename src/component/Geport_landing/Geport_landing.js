import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Geport_landing1 } from "./detail/Geport_landing1";
import { Geport_landing2 } from "./detail/Geport_landing2";
import {Geport_landing3} from "./detail/Geport_landing3"
import {Geport_landing4} from "./detail/Geport_landing4";

export function Geport_landing() {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const nextPage = () => {
        if (currentPage < 4) {
            setCurrentPage(prev => prev + 1);
        } else {
            navigate('/');
        }
    };

    const renderPage = () => {
        switch (currentPage) {
            case 1:
                return <Geport_landing1 nextPage={nextPage} />;
            case 2:
                return <Geport_landing2 nextPage={nextPage} />;
            case 3:
                return <Geport_landing3 nextPage={nextPage}/>;
            case 4:
                return <Geport_landing4 nextPage={nextPage}/>;
            default:
                // 추후 변경 필요
                return <Geport_landing nextPage={nextPage} />;
        }
    };

    return (
        <div>
            {renderPage()}
        </div>
    );
}
