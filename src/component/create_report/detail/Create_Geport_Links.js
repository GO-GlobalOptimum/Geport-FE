import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export function Create_Geport_Links(props) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState(['', '', '', '']); // 처음에는 4개 고정

    const handleAddInput = () => {
        setInputs([...inputs, '']); // 추가되는 인풋 상자리스트
    };

    const handleInputChange = (index, event) => {
        const newInputs = inputs.slice();
        newInputs[index] = event.target.value;
        setInputs(newInputs);
    };

    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    };

    const validUrlsCount = inputs.filter(isValidUrl).length;

    return (
        <div style={{ marginTop: '70px', padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto' }}>
            <div>
                <div>
                    <h2>나의 블로그 게시물 링크 4개를 첨부해 주세요</h2>
                </div>
                <div>
                    <p>게시물 링크를 4개 첨부해주세요</p>
                    <p>첨부한 게시물을 바탕으로 Geport를 만들어드립니다.</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {inputs.map((input, index) => (
                        <div key={index} style={{ flex: '0 0 45%', margin: '5px' }}>
                            <input
                                value={input}
                                onChange={(e) => handleInputChange(index, e)}
                                placeholder={`링크 ${index + 1}`}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </div>
                    ))}
                    <div style={{ flex: '0 0 45%', margin: '5px' }}>
                        <button
                            onClick={handleAddInput}
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ccc',
                                backgroundColor: '#f0f0f0',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <button
                        onClick={() => navigate('/')} 
                        style={{
                            backgroundColor: validUrlsCount >= 4 ? '#10901F' : '#d3d3d3',
                            color: 'white',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: validUrlsCount >= 4 ? 'pointer' : 'not-allowed'
                        }}
                        disabled={validUrlsCount < 4}
                    >
                        다음으로
                    </button>
                </div>
            </div>
        </div>
    );
}