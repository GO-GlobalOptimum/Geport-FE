import React from 'react';

const FormatOptions = ({ togglePosition, applyCommand, applyLink }) => {
    return (
        <div style={{ position: 'absolute', top: togglePosition.top, left: togglePosition.left, display: 'flex', alignItems: 'center', background: '#A3F0CBC3'}}>
            <label style={{ cursor: 'pointer', borderRadius: '5px', color: '#fff', marginRight: '5px' }} onClick={() => applyCommand('bold')}>
                <img src="./image/type=format-bold.png" alt="두껍게" style={{ width: '20px', height: '20px' }} />
            </label>
            <label style={{ cursor: 'pointer', borderRadius: '5px', color: '#fff', marginRight: '5px' }} onClick={() => applyCommand('italic')}>
                <img src="./image/type=format-italic.png" alt="기울기" style={{ width: '20px', height: '20px' }} />
            </label>
            <label style={{ cursor: 'pointer', borderRadius: '5px', color: '#fff', marginRight: '5px' }} onClick={() => applyCommand('underline')}>
                <img src="./image/type=format-underline.png" alt="밑줄" style={{ width: '20px', height: '20px' }} />
            </label>
            <label style={{ cursor: 'pointer', borderRadius: '5px', color: '#fff', marginRight: '5px' }} onClick={applyLink}>
                <img src="./image/type=link.png" alt="링크" style={{ width: '20px', height: '20px' }} />
            </label>
        </div>
    );
};

export default FormatOptions;