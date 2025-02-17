import React, { useState } from "react";
import styled from "styled-components";
import imageSrc from "../../images/HomePage/botAndHuman.jpg"; // Atualize com o caminho correto

// Container principal
const Container = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
    gap: 40px;
    align-items: flex-start;

    @media (max-width: 750px) {
        flex-direction: column;
        padding: 16px;
        gap: 24px;
    }
`;

// Container da imagem
const ImageContainer = styled.div`
    width: 50%;

    @media (max-width: 750px) {
        width: 100%;
    }
`;

// Container do conteúdo
const ContentContainer = styled.div`
    width: 50%;

    @media (max-width: 750px) {
        width: 100%;
    }
`;

// Estilo dos botões das tabs
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
            {/* Seção da imagem */}
            <ImageContainer>
                <img
                    src={imageSrc}
                    alt="Project Overview"
                    style={{
                        width: '100%',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    }}
                />
            </ImageContainer>

            {/* Seção do conteúdo */}
            <ContentContainer>
                {/* Tabs */}
                <div style={{
                    display: 'flex',
                    borderBottom: '1px solid #ddd',
                    paddingBottom: '8px',
                    marginBottom: '16px',
                    flexWrap: 'wrap',
                }}>
                    <TabButton
                        onClick={() => setTab("background")}
                        active={tab === "background"}
                    >
                        Background
                    </TabButton>
                    <TabButton
                        onClick={() => setTab("objectives")}
                        active={tab === "objectives"}
                    >
                        Objectives
                    </TabButton>
                    <TabButton
                        onClick={() => setTab("benefits")}
                        active={tab === "benefits"}
                    >
                        Benefits
                    </TabButton>
                </div>

                {/* Conteúdo das tabs */}
                <div style={{ color: 'inherit' }}>
                    {tab === "background" && (
                        <div>
                            <p style={{ marginTop: '8px', fontSize: '16px' }}>
                                The rise of Artificial Intelligence capable of generating coherent text, realistic images, and interacting on social media has sparked a growing debate about the authenticity of online profiles. Platforms like Twitter have become fertile ground for AI-driven bots, which can spread misinformation, manipulate discussions, and create artificial engagement. The ease with which automated profiles mimic human behavior raises concerns about the reliability of information and the formation of genuine opinions in digital spaces.
                            </p>
                            <p style={{ marginTop: '8px', fontSize: '16px' }}>
                                Inspired by the Dead Internet Theory, this project aims to develop a system that enables users to identify profiles suspected of being AI-driven. By leveraging community-based evaluations, we strive to increase transparency in online interactions and ensure that digital participation is not covertly manipulated by AI.
                            </p>
                        </div>
                    )}

                    {tab === "objectives" && (
                        <div>
                            <ul style={{ paddingLeft: '20px', marginTop: '8px', fontSize: '16px' }}>
                                <li>Accessible Platform: Develop a flexible platform available as both a website and a browser plug-in, allowing users to analyze profiles with ease.</li>
                                <li>Twitter Authentication: Implement a system to ensure only verified users can vote, enhancing the credibility of evaluations.</li>
                                <li>Intuitive Service: Provide clear and immediate results about profile credibility without requiring technical knowledge.</li>
                                <li>Collaborative Evaluation: Combine community votes with proprietary algorithms to determine the likelihood of an account being AI-managed.</li>
                                <li>Credibility Mechanism: Link user credibility to phone numbers, enhancing transparency and trust.</li>
                                <li>Weighted Voting: Assign different weights to votes based on user credibility, ensuring fairness and integrity.</li>
                                <li>Public Access: Ensure general information is accessible to all, while restricting voting to verified users.</li>
                                <li>Reduce Misinformation: Provide tools to identify suspicious accounts and make informed decisions.</li>
                                <li>Transparency: Enable users to view evaluations and comments on specific profiles, promoting accountability.</li>
                                <li>Binary Voting System: Simplify the evaluation process with a 'Yes' or 'No' vote, while allowing for additional comments.</li>
                            </ul>
                        </div>
                    )}

                    {tab === "benefits" && (
                        <div>
                            <p style={{ marginTop: '8px', fontSize: '16px' }}>
                                By using our platform, users can transform the way they view and tackle the challenge of identifying AI-driven profiles. Gone are the days of uncertainty; in their place, you'll find a structured pathway to authenticity:
                            </p>
                            <ul style={{ paddingLeft: '20px', marginTop: '8px', fontSize: '16px' }}>
                                <li>Proactive Detection: With every profile clearly evaluated, you can preemptively identify and avoid interactions with AI-driven accounts.</li>
                                <li>Empowered Decision-Making: Our platform empowers you to take control of your online interactions, ensuring they are genuine and trustworthy.</li>
                                <li>Community-Driven Insights: Leverage the collective intelligence of verified users to enhance the accuracy of profile evaluations.</li>
                            </ul>
                        </div>
                    )}
                </div>
            </ContentContainer>
        </Container>
    );
};

export default ProjectDescription;