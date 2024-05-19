import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import {My_Posts} from "./detail/My_Posts";
import {Other_Posts} from "./detail/Other_Posts";

export function Posts(props){

    return (
        <div>
            <div>
        <My_Posts />
      </div>
      <div>
        <Other_Posts />
      </div>
        </div>
    )
}