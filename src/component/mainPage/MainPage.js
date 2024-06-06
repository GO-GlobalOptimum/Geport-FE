import React, { useEffect } from 'react';
import { RecommendSide } from "../../component/mypage/detail/RecommendSide";
import { Header } from '../../layout/Header';
import { MyMain } from './detail/Mymain';

export function MainPage(props){
    const token = '';

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