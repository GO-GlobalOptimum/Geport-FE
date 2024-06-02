import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import {LandingHeader} from "../landing/detail/LandingHeader";
import {HotPage} from "../landing/detail/HotPage";
import {Modal} from "../../function/modal";
import axios from "axios";
import {SignUpPage} from "./detail/SignUpPage";


export function SignUp(props){
    const [isModalOpen, setModalOpen] = useState(true);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <LandingHeader openModal={openModal}/>
            <HotPage/>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <SignUpPage onClose={closeModal}/>
            </Modal>
        </div>
    )
}