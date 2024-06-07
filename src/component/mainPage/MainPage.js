import React, { useEffect } from 'react';
import { RecommendSide } from "../../component/mypage/detail/RecommendSide";
import { Header } from '../../layout/Header';
import { MyMain } from './detail/Mymain';

export function MainPage(props){
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcxODQzNjk5MiwidHlwZSI6ImFjY2VzcyIsImVtYWlsIjoicGljaDc3NTVAbmF2ZXIuY29tIn0.P-vrcBUpcMKTfLiL9ZrW0JqWRT9mOwWyLdA27wijvg5ASdqUcxqXsKt7mEzxmjT2-Uq46dy-9Xo7oVR_6xdU1w';

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 3 }}>
                    <MyMain token={token} />
                </div>
                <div style={{ flex: 2 }}>
                    <RecommendSide />
                </div>
            </div>
        </div>
    )
}