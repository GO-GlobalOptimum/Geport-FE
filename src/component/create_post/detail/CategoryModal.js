import React from 'react';

const CategoryModal = ({ handleCategoryModalClose, handleNext, setCategory }) => {
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    return (
        <div style={{ position: 'absolute', top: 'calc(5% + 10px)', left: '90%', transform: 'translateX(-50%)', width: '15%', background: '#A3F0CBC3', padding: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '15px', zIndex: 999 }}>
            <h3>카테고리를 선택하세요</h3>
            <select onChange={handleCategoryChange} style={{ width: '90%', border: 'none', background: '#A3F0CBC3', padding: '8px', borderRadius: '8px' }}>
                <option value="normal">일반</option>
                <option value="food">음식</option>
                <option value="travel">여행</option>
                {/* 필요한 카테고리 옵션들을 추가하세요 */}
            </select>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <button onClick={handleNext} style={{ background: '#00CC81', color: 'black', padding: '10px 20px', borderRadius: '15px', border: 'none', cursor: 'pointer' }}>다음</button>
            </div>
        </div>
    );
};

export default CategoryModal;
