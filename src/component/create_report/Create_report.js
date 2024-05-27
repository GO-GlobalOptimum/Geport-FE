import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Create_Geport_Posts } from './detail/Create_Geport_Posts';
import { Create_Igeport_Posts } from './detail/Create_Igeport_Posts';
import { Create_Geport_Links } from './detail/Create_Geport_Links';
import { Create_Igeport_Links } from './detail/Create_Igeport_Links';
import { Header } from '../../layout/Header';
import styled from 'styled-components';

const Button = styled.button`
    margin-right: 30px;
    margin-bottom: 10px;
    border-radius: 20px;
    padding: 5px 10px;
    background-color: ${(props) => (props.active ? '#10901FC3' : 'white')};
    color: ${(props) => (props.active ? 'white' : '#10901FC3')};
    border: 1px solid #10901FC3;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: #10901FC3;
        color: white;
    }
`;

export function Create_report(props) {
    const [reportType, setReportType] = useState(null);
    const [referenceType, setReferenceType] = useState(null);
    const [activeButton, setActiveButton] = useState(null);

    const navigate = useNavigate();

    const handleReportTypeSelection = (type) => {
        setReportType(type);
        setReferenceType(null); // 보고서 유형 변경 시 참조 유형 재설정
        setActiveButton(type); // 활성화 버튼 설정
    };

    const handleReferenceTypeSelection = (type) => {
        setReferenceType(type);
        setActiveButton(type); // 활성화 버튼 설정
    };

    const renderReferenceOptions = () => {
        return (
            <div style={{textAlign: 'center'}}>
                <h2>{reportType === 'Igeport' ? 'iGeport를 만들 포스트를 알려주세요.' : 'Geport를 만들 포스트를 알려주세요.'}</h2>
                <p>포스트를 선택하거나 복사한 URL을 입력해주세요</p>
                <br/>
                <Button
                    active={activeButton === 'Posts'}
                    onClick={() => handleReferenceTypeSelection('Posts')}
                >
                    포스트 참고
                </Button>
                <Button
                    active={activeButton === 'Links'}
                    onClick={() => handleReferenceTypeSelection('Links')}
                >
                    링크 참고
                </Button>
                <br/>
                <br/>
                <div>
                    <button style={{ color: 'Gray', background: 'none', border: 'none', outline: 'none' }}>취소하기</button>
                </div>
            </div>
        );
    };

    const renderCreatePage = () => {
        if (reportType === 'Igeport' && referenceType === 'Posts') {
            return <Create_Igeport_Posts />;
        } else if (reportType === 'Igeport' && referenceType === 'Links') {
            return <Create_Igeport_Links />;
        } else if (reportType === 'Geport' && referenceType === 'Posts') {
            return <Create_Geport_Posts />;
        } else if (reportType === 'Geport' && referenceType === 'Links') {
            return <Create_Geport_Links />;
        }
        return null;
    };

    return (
        <div>
            <div>
                <Header />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ flex: 1, marginTop: '70px' }}>
                    {!reportType ? (
                        <div style={{textAlign: 'center'}}>
                            <h2>원하는 AI 보고서를 선택해주세요</h2>
                            <p>Geport는 블로그 브랜딩 솔루션을, iGeport는 나의 심리분석 보고서를 제공합니다.</p>
                            <br/>
                            <Button
                                active={activeButton === 'Igeport'}
                                onClick={() => handleReportTypeSelection('Igeport')}
                            >
                                Igeport 만들기
                            </Button>
                            <Button
                                active={activeButton === 'Geport'}
                                onClick={() => handleReportTypeSelection('Geport')}
                            >
                                Geport 만들기
                            </Button>
                            <br/>
                            <br/>
                            <div>
                                <button style={{ color: 'Gray', background: 'none', border: 'none', outline: 'none' }}>취소하기</button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            {!referenceType ? (
                                renderReferenceOptions()
                            ) : (
                                renderCreatePage()
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}