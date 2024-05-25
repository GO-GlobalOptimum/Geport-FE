import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {UserInfo1} from "./detail/UserInfo1";
import {UserInfo2} from "./detail/UserInfo2";
import {UserInfo3} from "./detail/UserInfo3";
import {UserInfo4} from "./detail/UserInfo4";
import {UserInfo5} from "./detail/UserInfo5";
import {UserInfo7} from "./detail/UserInfo7";
import {UserInfo6} from "./detail/UserInfo6";
export function UserInfo() {
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
                return <UserInfo1 nextPage={nextPage}/>;
            case 2:
                return <UserInfo2 nextPage={nextPage}/>;
            case 3:
                return <UserInfo3 nextPage={nextPage}/>;
            case 4:
                return <UserInfo4 nextPage={nextPage}/>;
            case 5:
                return <UserInfo5 nextPage={nextPage}/>;
            case 6:
                return <UserInfo6 nextPage={nextPage}/>;
            case 7:
                return <UserInfo7 nextPage={nextPage}/>;
            default:
                return <UserInfo1 nextPage={nextPage} />;
        }
    };

    return (
        <div>
            {renderPage()}
        </div>
    );
}