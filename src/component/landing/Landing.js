import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { LandingHeader } from "./detail/LandingHeader";
import { HotPage } from "./detail/HotPage";
import { Modal } from "../../function/modal";
import { Login } from "../login/Login";
import axios from "axios";

export function Landing(props) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {

        fetchData();
    }, []);
    
    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get('/BE/spring/posts/list/popular', {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             },
    //             withCredentials: true
    //         });
    //         setPosts(response.data.content);
    //     } catch (error) {
    //         console.error('Error fetching posts:', error);
    //     }
    // };
    const fetchData = async () => {
        try {
            const response = await axios.get('/BE/spring/posts/list/popular', {
                withCredentials: true
            });
            setPosts(response.data.content);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <LandingHeader openModal={openModal} />
            <HotPage posts={posts} />
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Login onClose={closeModal} />
            </Modal>
        </div>
    )
}