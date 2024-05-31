import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export function Create_post() {
    const navigate = useNavigate();
    const contentRef = useRef(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [images, setImages] = useState([]);
    const [isContentEntered, setIsContentEntered] = useState(false);
    const [alert, setAlert] = useState('');
    const [togglePosition, setTogglePosition] = useState({ top: 0, left: 0 });
    const [showUploadButtons, setShowUploadButtons] = useState(false);
    const [toggleImage, setToggleImage] = useState("./image/type=plus.png");
    const [showTagModal, setShowTagModal] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
//teste
    const logoClick = () => {
        navigate("/");
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        setAlert('');
    };

    const handleContentChange = () => {
        const text = contentRef.current.innerText;
        setContent(text);
        setIsContentEntered(!!text.trim());
        setAlert('');
        updateTogglePosition();
    };

    const handleImageChange = (e) => {
        const selectedImages = Array.from(e.target.files);
        setImages([...images, ...selectedImages]);
        selectedImages.forEach(image => {
            const reader = new FileReader();
            reader.onload = () => {
                const imgSrc = reader.result;
                contentRef.current.innerHTML += `<img src="${imgSrc}" alt="이미지" style="max-width: 70%; height: auto; margin: 5px 0;" />`;
                updateTogglePosition();
            };
            reader.readAsDataURL(image);
        });
    };

    const handleVideoChange = (e) => {
        const selectedVideos = Array.from(e.target.files);
        selectedVideos.forEach(video => {
            const reader = new FileReader();
            reader.onload = () => {
                const videoSrc = reader.result;
                contentRef.current.innerHTML += `<video controls style="max-width: 70%; height: auto; margin: 5px 0;">
                                                    <source src="${videoSrc}" type="${video.type}">
                                                  </video>`;
                updateTogglePosition();
            };
            reader.readAsDataURL(video);
        });
    };

    const handleSubmit = () => {
        if (!title && !content) {
            setAlert('제목과 내용을 입력해 주세요.');
        } else if (!title) {
            setAlert('제목을 입력해 주세요.');
        } else if (!isContentEntered) {
            setAlert('내용을 입력해 주세요.');
        } else {
            setShowTagModal(true);
        }
    };

    const handleTagModalClose = () => {
        setShowTagModal(false);
        console.log("제목:", title);
        console.log("내용:", content);
        console.log("이미지들:", images);
    };

    const updateTogglePosition = () => {
        const contentElement = contentRef.current;
        if (contentElement) {
            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
                const range = selection.getRangeAt(0).cloneRange();
                range.collapse(false);
                const rect = range.getClientRects()[0];
                if (rect) {
                    setTogglePosition({ top: rect.bottom + window.scrollY, left: contentElement.getBoundingClientRect().left - 40 });
                }
            }
        }
    };

    const handleToggleClick = () => {
        setShowUploadButtons(prevState => !prevState);
        setToggleImage(prevState => (prevState === "./image/type=plus.png" ? "./image/type=quit.png" : "./image/type=plus.png")); // Toggle between images
    };

    const handleMouseUp = () => {
        const selection = window.getSelection();
        if (selection && selection.toString().length > 0) {
            setShowOptions(true);
            updateTogglePosition();
        } else {
            setShowOptions(false);
        }
    };

    const applyCommand = (command) => {
        document.execCommand(command, false, null);
    };

    const applyLink = () => {
        const url = prompt("Enter the URL:");
        if (url) {
            document.execCommand("createLink", false, url);
        }
    };

    useEffect(() => {
        const contentElement = contentRef.current;
        if (contentElement) {
            contentElement.addEventListener('input', updateTogglePosition);
            contentElement.addEventListener('mouseup', updateTogglePosition);
            contentElement.addEventListener('keyup', updateTogglePosition);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            if (contentElement) {
                contentElement.removeEventListener('input', updateTogglePosition);
                contentElement.removeEventListener('mouseup', updateTogglePosition);
                contentElement.removeEventListener('keyup', updateTogglePosition);
                document.removeEventListener('mouseup', handleMouseUp);
            }
        };
    }, []);

    useEffect(() => {
        // 초기 togglePosition 설정
        const contentElement = contentRef.current;
        if (contentElement) {
            const contentRect = contentElement.getBoundingClientRect();
            setTogglePosition({ top: contentRect.top + window.scrollY, left: contentRect.left - 40 });
        }
    }, []);

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <img src={"./image/Logo.png"} style={{ marginRight: '10px', width: '150px', height: '30px', padding: "1%", cursor: "pointer", borderRadius: "5px" }} onClick={logoClick} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button onClick={handleSubmit} style={{ background: showTagModal ? "green" : (isContentEntered ? "#00CC81" : "#ccc"), padding: '5px', borderRadius: '50px', border: isContentEntered ? "none" : '1px solid #ccc', display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                        등록하기
                    </button>
                    <img src="./image/notification.png" alt="notification" style={{ width: '20px', height: '20px', marginRight: '20px' }} />
                    <img src="./image/user.png" alt="user" style={{ width: '20px', height: '20px', marginRight: '20px' }} />
                </div>
            </div>

            {alert && <div style={{ textAlign: 'center', color: 'red', marginTop: '10px' }}>{alert}</div>} {/* 알림 메시지 표시 */}

            <div style={{ marginRight: '20px', textAlign: 'center' }}>
                {/* 제목 입력란 */}
                <input type="text" placeholder="제목을 입력하세요" value={title} onChange={handleTitleChange} style={{ border: 'none', width: '60%', padding: '10px', fontSize: '46px', fontWeight: 'bold', marginTop: '20px' }} />

                {/* 내용 입력란 */}
                <div
                    contentEditable
                    onInput={handleContentChange}
                    ref={contentRef}
                    style={{ textAlign: 'left', width: '60%', minHeight: '200px', padding: '10px', fontSize: '14px', letterSpacing: '0.8px', lineHeight: '30px', marginTop: '20px', outline: 'none', margin: '0 auto', position: 'relative' }}
                ></div>

                {showOptions && (
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
                )}
                
                {showUploadButtons && (
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
                )}

                <div
                    style={{
                        position: 'absolute',
                        top: togglePosition.top - 20,
                        left: togglePosition.left - 30,
                        cursor: 'pointer'
                    }}
                    onClick={handleToggleClick}
                >
                    <img src={toggleImage} alt="plus" style={{ width: '20px', height: '20px', borderRadius: '50%' }} />
                </div>
            </div>
            {/* Tag modal */}
            {showTagModal && (
                <div style={{ position: 'absolute', top: 'calc(5% + 10px)', left: '90%', transform: 'translateX(-50%)', width: '15%', background: '#A3F0CBC3', padding: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '15px', zIndex: 999 }}>
                    <h3>태그를 추가하시겠습니까?</h3>
                    <input type="text" placeholder="태그를 추가해주세요(ex #운동 #취미)" style={{ width: '90%', border: 'none', background: '#A3F0CBC3', padding: '8px', borderRadius: '8px' }} />
                    <div style={{ marginTop: '20px', textAlign: 'center' }}>
                        <button onClick={handleTagModalClose} style={{ background: '#00CC81', color: 'black', padding: '10px 20px', borderRadius: '15px', border: 'none', cursor: 'pointer' }}>또는 AI에게 태그 추천받기</button>
                    </div>
                </div>
            )}
        </div>
    );
}