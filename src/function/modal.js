export function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                position: 'relative', // 위치 상대 설정
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '5px',
                width: '792px',
                height: '528px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute', // 절대 위치 설정
                        top: '10px', // 상단에서부터 10px
                        right: '10px', // 우측에서부터 10px
                        cursor: 'pointer', // 마우스 커서 포인터로 변경
                        border: 'none', // 테두리 없애기
                        background: 'transparent', // 배경색 투명
                        fontSize: '16px' // 폰트 크기 설정
                    }}
                >
                    ×
                </button>
                {children}
            </div>
        </div>
    );
}
