import React, { useState } from 'react';

const TagModal = ({ handleTagModalClose, handleSubmit }) => {
    const [tags, setTags] = useState('');

    const handleTagChange = (e) => {
        setTags(e.target.value);
    };

    const handleFinalSubmit = () => {
        handleSubmit(tags);
        handleTagModalClose();
    };

    return (
        <div style={{ position: 'absolute', top: 'calc(5% + 10px)', left: '90%', transform: 'translateX(-50%)', width: '15%', background: '#A3F0CBC3', padding: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '15px', zIndex: 999 }}>
            <h3>태그를 추가하시겠습니까?</h3>
            <input type="text" value={tags} onChange={handleTagChange} placeholder="태그를 추가해주세요(ex #운동 #취미)" style={{ width: '90%', border: 'none', background: '#A3F0CBC3', padding: '8px', borderRadius: '8px' }} />
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <button onClick={handleFinalSubmit} style={{ background: '#00CC81', color: 'black', padding: '10px 20px', borderRadius: '15px', border: 'none', cursor: 'pointer' }}>게시물 만들기</button>
            </div>
        </div>
    );
};

export default TagModal;
