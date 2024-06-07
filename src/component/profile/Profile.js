import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import { Fix_Profile } from './detail/Fix_Profile';
import { Header } from '../../layout/Header';

export function Profile(props){
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcxODQzNjk5MiwidHlwZSI6ImFjY2VzcyIsImVtYWlsIjoicGljaDc3NTVAbmF2ZXIuY29tIn0.P-vrcBUpcMKTfLiL9ZrW0JqWRT9mOwWyLdA27wijvg5ASdqUcxqXsKt7mEzxmjT2-Uq46dy-9Xo7oVR_6xdU1w';

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div style={{display:'flex'}}>
                <div style={{flex:1}}>
                    <Fix_Profile token={token}/>
                </div>
            </div>
        </div> 
    )
}