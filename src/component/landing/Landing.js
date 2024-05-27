import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import {LandingHeader} from "./detail/LandingHeader";
import {HotPage} from "./detail/HotPage";
import {Modal} from "../../function/modal";
import {Login} from "../login/Login";
import axios from "axios";


export function Landing(props){
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(()=>{
        axios.get("/BE/",{
            withCredentials: true
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.error("There was an error making the request:", error);
            });
    },[])

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <LandingHeader openModal={openModal}/>
            <HotPage/>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Login onClose={closeModal}/>
            </Modal>
        </div>
    )
}