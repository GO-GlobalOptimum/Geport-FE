import React from 'react';
import { Header } from '../../layout/Header';
import { Search_detail } from "./detail/Search_detail";

export function Search(props) {
    const token = '';

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <div style={{ flex: 1, display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <Search_detail token={token}/>
                </div>
            </div>
        </div>
    );
}