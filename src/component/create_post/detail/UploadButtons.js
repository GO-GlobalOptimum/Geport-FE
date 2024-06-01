import React from 'react';

const UploadButtons = ({ handleImageChange, handleVideoChange, togglePosition }) => {
    return (
        <div style={{ position: 'absolute', top: togglePosition.top - 20, left: togglePosition.left, display: 'flex', alignItems: 'center', background: '#A3F0CBC3' }}>
            <label htmlFor="image-upload" style={{ cursor: 'pointer', borderRadius: '5px', color: '#fff', marginRight: '5px' }}>
                <img src="./image/type=image.png" alt="이미지 첨부" style={{ width: '20px', height: '20px' }} />
            </label>
            <input id="image-upload" type="file" accept="image/*" multiple onChange={handleImageChange} style={{ display: 'none' }} />
            
            <label htmlFor="video-upload" style={{ cursor: 'pointer', borderRadius: '5px', color: '#fff' }}>
                <img src="./image/type=video.png" alt="영상 첨부" style={{ width: '20px', height: '20px' }} />
            </label>
            <input id="video-upload" type="file" accept="video/*" multiple onChange={handleVideoChange} style={{ display: 'none' }} />
        </div>
    );
};

export default UploadButtons;