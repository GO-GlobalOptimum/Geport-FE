import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import { Fix_Profile } from './detail/Fix_Profile';
import { Header } from '../../layout/Header';

export function Profile(props){

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div style={{display:'flex'}}>
                <div style={{flex:1}}>
                    <Fix_Profile/>
                </div>
            </div>
        </div> 
    )
}