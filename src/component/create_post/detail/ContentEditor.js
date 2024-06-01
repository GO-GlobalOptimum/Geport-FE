import React, { useRef, useEffect } from 'react';

const ContentEditor = ({ contentRef, handleContentChange, updateTogglePosition }) => {
    useEffect(() => {
        const contentElement = contentRef.current;
        if (contentElement) {
            contentElement.addEventListener('input', updateTogglePosition);
            contentElement.addEventListener('mouseup', updateTogglePosition);
            contentElement.addEventListener('keyup', updateTogglePosition);
        }

        return () => {
            if (contentElement) {
                contentElement.removeEventListener('input', updateTogglePosition);
                contentElement.removeEventListener('mouseup', updateTogglePosition);
                contentElement.removeEventListener('keyup', updateTogglePosition);
            }
        };
    }, [contentRef, updateTogglePosition]);

    return (
        <div
            contentEditable
            onInput={handleContentChange}
            ref={contentRef}
            style={{ textAlign: 'left', width: '60%', minHeight: '200px', padding: '10px', fontSize: '14px', letterSpacing: '0.8px', lineHeight: '30px', marginTop: '20px', outline: 'none', margin: '0 auto', position: 'relative' }}
        ></div>
    );
};

export default ContentEditor;