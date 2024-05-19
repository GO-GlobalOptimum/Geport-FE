import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {Hidden_code1} from "./detail/Hidden_code1";
import {Hidden_code2} from "./detail/Hidden_code2";
export function Hidden_code() {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const nextPage = () => {
        if (currentPage < 8) {
            setCurrentPage(prev => prev + 1);
        } else {
            navigate('/');
        }
    };

    const renderPage = () => {
        switch (currentPage) {
            case 1:
                return <Hidden_code1 nextPage={nextPage}/>;
            case 2:
                return <Hidden_code2 nextPage={nextPage}/>;
            default:
                // 추후 변경 필요
                return <Hidden_code1 nextPage={nextPage} />;
        }
    };

    return (
        <div>
            {renderPage()}
        </div>
    );
}