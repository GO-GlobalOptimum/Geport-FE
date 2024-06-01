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
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcxODQzNjk5MiwidHlwZSI6ImFjY2VzcyIsImVtYWlsIjoicGljaDc3NTVAbmF2ZXIuY29tIn0.P-vrcBUpcMKTfLiL9ZrW0JqWRT9mOwWyLdA27wijvg5ASdqUcxqXsKt7mEzxmjT2-Uq46dy-9Xo7oVR_6xdU1w';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/BE/spring/posts/list/popular', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    withCredentials: true
                });
                setPosts(response.data.content);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchData();
    }, []);

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