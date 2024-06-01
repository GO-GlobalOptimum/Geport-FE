import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TitleInput from './detail/TitleInput';
import ContentEditor from './detail/ContentEditor';
import UploadButtons from './detail/UploadButtons';
import FormatOptions from './detail/FormatOptions';
import TagModal from './detail/TagModal';
//teset
export function Create_post(props) {
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
        setToggleImage(prevState => (prevState === "./image/type=plus.png" ? "./image/type=quit.png" : "./image/type=plus.png"));
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
        const contentElement = contentRef.current;
        if (contentElement) {
            const contentRect = contentElement.getBoundingClientRect();
            setTogglePosition({ top: contentRect.top + window.scrollY, left: contentRect.left - 40 });
        }
    }, []);

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' , marginTop:'20px'}}>
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

            {alert && <div style={{ textAlign: 'center', color: 'red', marginTop: '10px' }}>{alert}</div>}

            <div style={{ marginRight: '20px', textAlign: 'center' }}>
                <TitleInput title={title} handleTitleChange={handleTitleChange} />
                <ContentEditor contentRef={contentRef} handleContentChange={handleContentChange} updateTogglePosition={updateTogglePosition} />
                
                {showOptions && <FormatOptions togglePosition={togglePosition} applyCommand={applyCommand} applyLink={applyLink} />}
                {showUploadButtons && <UploadButtons handleImageChange={handleImageChange} handleVideoChange={handleVideoChange} togglePosition={togglePosition} />}
                
                <div
                    style={{ position: 'absolute', top: togglePosition.top - 20, left: togglePosition.left - 30, cursor: 'pointer' }}
                    onClick={handleToggleClick}
                >
                    <img src={toggleImage} alt="plus" style={{ width: '20px', height: '20px', borderRadius: '50%' }} />
                </div>
            </div>
            
            {showTagModal && <TagModal handleTagModalClose={handleTagModalClose} />}
        </div>
    );
}