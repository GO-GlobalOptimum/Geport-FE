import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import {LandingHeader} from "./detail/LandingHeader";
import {HotPage} from "./detail/HotPage";


export function Landing(props){

    return (
        <div>
            <LandingHeader/>
            <HotPage/>
        </div>
    )
}