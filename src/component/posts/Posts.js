//게시물 아이디별로 상세 볼수 있는 페이지
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../layout/Header';
import {Post} from './detail/post';

import axios from 'axios';
import Cookies from 'js-cookie';

export function Posts(props) {

    //const [posts, setPosts] = useState([]);

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div style={{display:'flex'}}>
                <div style={{flex:1}}>
                    <Post/>  
                </div>
            </div>
        </div>
    )
}