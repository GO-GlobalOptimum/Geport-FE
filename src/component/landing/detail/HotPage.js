import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";

export function HotPage(props){

    const [hotpage, sethotpage] = useState([1,2,3]);

    return(
        <div>
            <div style={{height:"40px"}}/>
            <div style={{paddingLeft: "3%", height: "400px"}}>
                <p style={{fontWeight: "700", fontSize: "22px", lineHeight: "28px", color: "#262626"}}>
                    인기 게시글
                </p>
                <div style={{display: 'flex', width: "100%", overflowX: "auto"}}>
                    {
                        hotpage.map((i)=>{
                            return (
                                <div style={{width: "384px", height: "356px", padding: "1%"}}>
                                    <img src={`./image/Hotpage${i}.png`}
                                         style={{width: "384px", height: "256px", padding: "1%"}}/>
                                    <div style={{height: "100px", textAlign: "center"}}>
                                        아무 설명
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


