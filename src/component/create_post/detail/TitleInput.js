import React from 'react';

const TitleInput = ({ title, handleTitleChange }) => {
    return (
        <input
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={handleTitleChange}
            style={{ border: 'none', width: '60%', padding: '10px', fontSize: '46px', fontWeight: 'bold', marginTop: '20px' }}
        />
    );
};

export default TitleInput;