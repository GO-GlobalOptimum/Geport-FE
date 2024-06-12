import React from 'react';

const CategoryModal = ({ handleCategoryModalClose, handleNext, setCategory }) => {
    const handleCategoryChange = (event) => {
        setCategory([event.target.value]);
    };

    return (
        <div style={{ position: 'absolute', top: 'calc(5% + 10px)', left: '90%', transform: 'translateX(-50%)', width: '15%', background: '#A3F0CBC3', padding: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '15px', zIndex: 999 }}>
            <h3>카테고리를 선택하세요</h3>
            <select onChange={handleCategoryChange} style={{ width: '90%', border: 'none', background: '#A3F0CBC3', padding: '8px', borderRadius: '8px' }}>
                <option value="normal">일반</option>
                <option value="food">음식</option>
                <option value="travel">여행</option>
                <option value="lifestyle">라이프스타일</option>
                <option value="health">건강</option>
                <option value="fitness">피트니스</option>
                <option value="technology">기술</option>
                <option value="travel">여행</option>
                <option value="recipe">레시피</option>
                <option value="personal finances">개인재정</option>
                <option value="DIY (self-made)">DIY(자가제작)</option>
                <option value="fashion">패션</option>
                <option value="beauty">뷰티</option>
                <option value="picture">사진</option>
                <option value="parenting">육아</option>
                <option value="education">교육</option>
                <option value="career">커리어</option>
                <option value="music">음악</option>
                <option value="movie">영화</option>
                <option value="book">책</option>
                <option value="art">예술</option>
                <option value="science">과학</option>
                <option value="sports">스포츠</option>
                <option value="game">게임</option>
                <option value="review">리뷰</option>
                <option value="politics">정치</option>
                <option value="environment">환경</option>
                <option value="marketing">마케팅</option>
                <option value="founded">창업</option>
                <option value="mobile">모바일</option>
                <option value="animal">동물</option>
                <option value="psychology">심리학</option>


                {/* 필요한 카테고리 옵션들을 추가하세요 */}
            </select>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <button onClick={handleNext} style={{ background: '#00CC81', color: 'black', padding: '10px 20px', borderRadius: '15px', border: 'none', cursor: 'pointer' }}>다음</button>
            </div>
        </div>
    );
};

export default CategoryModal;