import React, { useState } from "react";
import styled from "styled-components";
import imageSrc from "../../images/HomePage/botAndHuman.jpg"; // Atualize com o caminho correto

// Main container
const Container = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
    gap: 20px;
    align-items: flex-start;
    position: relative;
    justify-content: flex-start;

    @media (max-width: 750px) {
        flex-direction: column;
        padding: 16px;
        gap: 16px;
    }
`;

// Image container remains static
const ImageContainer = styled.div`
    width: 35%;  /* Ajuste da largura fixa */
    display: flex;
    justify-content: center;
    position: sticky;
    top: 20px; /* Mantém a imagem no lugar ao rolar */
    align-self: flex-start;

    @media (max-width: 750px) {
        width: 100%;
        position: static;
    }
`;

// Content container, pode ajustar o espaço para o conteúdo
const ContentContainer = styled.div`
    flex: 1; /* A largura se adapta conforme o espaço disponível */
    display: flex;
    flex-direction: column;
`;

// Botões de tab
const TabButton = styled.button`
    margin-right: 16px;
    cursor: pointer;
    background: none;
    border: none;
    font-weight: bold;
    font-size: 18px;
    color: ${({ active }) => (active ? '#556c98' : 'inherit')};
    transition: color 0.3s;

    @media (max-width: 750px) {
        font-size: 16px;
    }
`;

const ProjectDescription = () => {
    const [tab, setTab] = useState("background");

    return (
        <Container>
            {/* Seção da Imagem */}
            <ImageContainer>
                <img
                    src={imageSrc}
                    alt="Project Overview"
                    style={{
                        width: '100%',
                        maxWidth: '300px',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    }}
                />
            </ImageContainer>

            {/* Seção de conteúdo */}
            <ContentContainer>
                {/* Tabs */}
                <div style={{
                    display: 'flex',
                    borderBottom: '1px solid #ddd',
                    paddingBottom: '8px',
                    marginBottom: '16px',
                    flexWrap: 'wrap',
                }}>
                    <TabButton onClick={() => setTab("background")} active={tab === "background"}>
                        Background
                    </TabButton>
                    <TabButton onClick={() => setTab("objectives")} active={tab === "objectives"}>
                        Objectives
                    </TabButton>
                    <TabButton onClick={() => setTab("benefits")} active={tab === "benefits"}>
                        Benefits
                    </TabButton>
                </div>

                {/* Conteúdo das Tabs */}
                <div style={{ color: 'inherit' }}>
                    {tab === "background" && (
                        <p style={{ marginTop: '8px', fontSize: '16px' }}>
                            The rise of AI-driven bots on platforms like Twitter has raised concerns about the authenticity of online profiles, with bots spreading misinformation and manipulating discussions. Inspired by the Dead Internet Theory, this project aims to develop a system that helps users identify and block AI-managed profiles using community-based evaluations, promoting transparency and protecting genuine online interactions.
                        </p>
                    )}
                    {tab === "objectives" && (
                        <ul style={{ paddingLeft: '20px', marginTop: '8px', fontSize: '16px' }}>
                            <li>Develop a flexible platform for easy profile analysis</li>
                            <li>Implement personal and community blacklists</li>
                            <li>Provide clear credibility results</li>
                            <li>Combine community votes and algorithms to detect AI accounts</li>
                            <li>Link credibility to phone numbers and apply weighted voting</li>
                            <li>Restrict voting to verified users, with public data access</li>
                            <li>Identify suspicious accounts and promote transparency</li>
                            <li>Use a binary voting system with optional comments</li>
                        </ul>
                    )}
                    {tab === "benefits" && (
                        <p style={{ marginTop: '8px', fontSize: '16px' }}>
                            Our platform helps users effectively identify AI-driven profiles with clear evaluations, enabling proactive detection and better control over online interactions. It empowers users to make informed decisions, relying on community-driven insights for more accurate profile assessments.
                        </p>
                    )}
                </div>
            </ContentContainer>
        </Container>
    );
};

export default ProjectDescription;
