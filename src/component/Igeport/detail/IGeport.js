import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";


export function Landing(props){
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <LandingHeader openModal={openModal}/>
            <HotPage/>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Login/>
            </Modal>
        </div>
    )
}