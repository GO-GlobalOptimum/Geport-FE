import React from 'react';
import { Header } from '../../layout/Header';
import { Search_detail } from "./detail/Search_detail";

export function Search(props) {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcxODQzNjk5MiwidHlwZSI6ImFjY2VzcyIsImVtYWlsIjoicGljaDc3NTVAbmF2ZXIuY29tIn0.P-vrcBUpcMKTfLiL9ZrW0JqWRT9mOwWyLdA27wijvg5ASdqUcxqXsKt7mEzxmjT2-Uq46dy-9Xo7oVR_6xdU1w';

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