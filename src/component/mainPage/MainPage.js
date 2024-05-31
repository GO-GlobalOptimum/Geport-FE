import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import {RecommendSide} from "../../component/mypage/detail/RecommendSide";
import { Header } from '../../layout/Header';
import { MyMain } from './detail/Mymain';

export function MainPage(props){
    return (
      <div>
        <div>
          <Header/>
        </div>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 3 }}>
        <MyMain />
      </div>
      <div style={{ flex: 2 }}>
        <RecommendSide />
      </div>
        </div>
      </div>
    )
}