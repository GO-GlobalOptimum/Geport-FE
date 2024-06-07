import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import {RecommendSide} from "./detail/RecommendSide";
import {MyInfo} from"./detail/MyInfo";
import { Header } from '../../layout/Header';
export function MyPage(props){

  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcxODQzNjk5MiwidHlwZSI6ImFjY2VzcyIsImVtYWlsIjoicGljaDc3NTVAbmF2ZXIuY29tIn0.P-vrcBUpcMKTfLiL9ZrW0JqWRT9mOwWyLdA27wijvg5ASdqUcxqXsKt7mEzxmjT2-Uq46dy-9Xo7oVR_6xdU1w';

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