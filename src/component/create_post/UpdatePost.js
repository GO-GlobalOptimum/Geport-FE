import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import TitleInput from './detail/TitleInput';
import ContentEditor from './detail/ContentEditor';
import UploadButtons from './detail/UploadButtons';
import FormatOptions from './detail/FormatOptions';
import TagModal from './detail/TagModal';
import CategoryModal from './detail/CategoryModal';
import TagModal_update from './detail/TagModal_update';

export function UpdatePost(props) {
    const navigate = useNavigate();
    const { postId } = useParams();
    const contentRef = useRef(null);
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState(['normal']);
    const [postContent, setPostContent] = useState('');
    const [thumbnailImage, setThumbnailImage] = useState([]);
    const [isContentEntered, setIsContentEntered] = useState(false);
    const [alert, setAlert] = useState('');
    const [togglePosition, setTogglePosition] = useState({ top: 0, left: 0 });
    const [showUploadButtons, setShowUploadButtons] = useState(false);
    const [toggleImage, setToggleImage] = useState("./image/type=plus.png");
    const [showTagModal, setShowTagModal] = useState(false);
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    const handleNext = () => {
        setShowCategoryModal(false);
        setShowTagModal(true);
    };

    useEffect(() => {
        Cookies.set('memberId', 1, { expires: 7 });

        const fetchPost = async () => {
            try {
                const response = await axios.get(`/BE/spring/posts/post/${postId}`, {
                    withCredentials: true
                });
                setPost(response.data);
                setTitle(response.data.title);
                setPostContent(response.data.postContent);
                setThumbnailImage([response.data.imageUrl]);
                setIsContentEntered(!!response.data.postContent.trim());
            } catch (error) {
                console.error('Error fetching post:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [postId]);

    const logoClick = () => {
        navigate("/");
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        setAlert('');
    };

    const handleContentChange = () => {
        const text = contentRef.current.innerText;
        setPostContent(text);
        setIsContentEntered(!!text.trim());
        setAlert('');
        updateTogglePosition();
    };

    const handleImageChange = (e) => {
        const selectedImages = Array.from(e.target.files);
        const imagePromises = selectedImages.map(image => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                    const imgSrc = reader.result;
                    contentRef.current.innerHTML += `<img src="${imgSrc}" alt="이미지" style="max-width: 70%; height: auto; margin: 5px 0;" />`;
                    resolve(imgSrc);
                };
                reader.onerror = reject;
                reader.readAsDataURL(image);
            });
        });

        Promise.all(imagePromises)
            .then(imgSrcs => setThumbnailImage([...thumbnailImage, ...imgSrcs]))
            .catch(error => console.error('Error loading images:', error));

        updateTogglePosition();
    };

    const handleVideoChange = (e) => {
        const selectedVideos = Array.from(e.target.files);
        const videoPromises = selectedVideos.map(video => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                    const videoSrc = reader.result;
                    contentRef.current.innerHTML += `<video controls style="max-width: 70%; height: auto; margin: 5px 0;">
                                                        <source src="${videoSrc}" type="${video.type}">
                                                      </video>`;
                    resolve(videoSrc);
                };
                reader.onerror = reject;
                reader.readAsDataURL(video);
            });
        });

        Promise.all(videoPromises)
            .then(videoSrcs => setThumbnailImage([...thumbnailImage, ...videoSrcs]))
            .catch(error => console.error('Error loading videos:', error));

        updateTogglePosition();
    };

    const handleSubmit = (tags) => {
        if (!title && !postContent) {
            setAlert('제목과 내용을 입력해 주세요.');
        } else if (!title) {
            setAlert('제목을 입력해 주세요.');
        } else if (!isContentEntered) {
            setAlert('내용을 입력해 주세요.');
        } else {
            const postData = {
                title,
                postContent,
                thumbnailImage: thumbnailImage.length > 0 ? thumbnailImage[0] : '',
                categories,
                tags: Array.isArray(tags) ? tags.map(tag => tag.replace('#', '')) : []
            };
    
            console.log('Submitting post data:', postData);
    
            axios.post(`/BE/spring/posts/post-id=${postId}/update`, postData, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            })
            .then(response => {
                console.log(response.data);
                navigate('/mainpage');
            })
            .catch(error => {
                console.error('Error submitting post:', error);
                console.log('Error response:', error.response); // Add this line to log the error response
                setAlert('게시글 수정 중 오류가 발생했습니다.');
            });
        }
    };

    const handleCategoryModalClose = () => {
        setShowCategoryModal(false);
    };

    const handleTagModalClose = () => {
        setShowTagModal(false);
        console.log("제목:", title);
        console.log("내용:", postContent);
        console.log("이미지들:", thumbnailImage);
        console.log("카테고리:", categories);
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
            contentElement.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('keyup', updateTogglePosition);
        }
        return () => {
            if (contentElement) {
                contentElement.removeEventListener('input', updateTogglePosition);
                contentElement.removeEventListener('mouseup', handleMouseUp);
                document.removeEventListener('keyup', updateTogglePosition);
            }
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        const contentElement = contentRef.current;
        if (contentElement) {
            contentElement.addEventListener('paste', (event) => {
                const items = (event.clipboardData || window.clipboardData).items;
                for (const item of items) {
                    if (item.type.startsWith('image/')) {
                        const file = item.getAsFile();
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            const img = document.createElement('img');
                            img.src = event.target.result;
                            img.style.maxWidth = '70%';
                            img.style.height = 'auto';
                            img.style.margin = '5px 0';
                            contentElement.appendChild(img);
                        };
                        reader.readAsDataURL(file);
                    }
                }
            });
        }
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!post) {
        return <div>No post found</div>;
    }

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
                <div>
                    <img src={"./image/Logo.png"} style={{ marginRight: '10px', width: '150px', height: '30px', padding: "1%", cursor: "pointer", borderRadius: "5px" }} onClick={logoClick} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button onClick={() => setShowCategoryModal(true)} style={{ background: (isContentEntered ? "#00CC81" : "#ccc"), padding: '5px', borderRadius: '50px', border: isContentEntered ? "none" : '1px solid #ccc', display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                        수정 완료
                    </button>
                    <img src="./image/notification.png" alt="notification" style={{ width: '20px', height: '20px', marginRight: '20px' }} />
                    <img src="./image/user.png" alt="user" style={{ width: '20px', height: '20px', marginRight: '20px' }} />
                </div>
            </div>

            {alert && <div style={{ textAlign: 'center', color: 'red', marginTop: '10px' }}>{alert}</div>}

            <div style={{ marginRight: '20px', textAlign: 'center' }}>
                <TitleInput title={title} handleTitleChange={handleTitleChange} />
                <ContentEditor contentRef={contentRef} handleContentChange={handleContentChange} />

                {showOptions && <FormatOptions togglePosition={togglePosition} applyCommand={applyCommand} applyLink={applyLink} />}
                {showUploadButtons && <UploadButtons handleImageChange={handleImageChange} handleVideoChange={handleVideoChange} togglePosition={togglePosition} />}

                <div
                    style={{ position: 'absolute', top: togglePosition.top - 20, left: togglePosition.left - 30, cursor: 'pointer' }}
                    onClick={handleToggleClick}
                >
                    <img src={toggleImage} alt="plus" style={{ width: '20px', height: '20px', borderRadius: '50%' }} />
                </div>
            </div>

            {showTagModal && <TagModal_update handleTagModalClose={handleTagModalClose} handleSubmit={handleSubmit} />}
            {showCategoryModal && <CategoryModal handleCategoryModalClose={handleCategoryModalClose} handleNext={handleNext} setCategory={setCategories} />}
        </div>
    );
}
