import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import {RecommendSide} from "./detail/RecommendSide";
import {MyInfo} from"./detail/MyInfo";
import { Header } from '../../layout/Header';
export function MyPage(props){

  const token = '';

    return (
      <div>
        <Header/>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 3 }}>
        <MyInfo token={token}/>
      </div>
      <div style={{ flex: 2 }}>
        <RecommendSide />
      </div>
        </div>
      </div>
        
    )
}