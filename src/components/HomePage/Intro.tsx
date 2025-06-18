import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import astronautImage from '../../images/HomePage/bot.png'; // Ajuste o caminho conforme necessário

// Container principal
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to right, #556c98, #b3bedc 80%, #d8dde8 100%); /* Gradiente ajustado */
    padding: 3rem;
    position: relative;
    color: #ffffff;
    min-height: 60vh;
    overflow: hidden;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 2rem;
        text-align: center;
    }
`;

// Container do texto
const TextContainer = styled.div`
    max-width: 55%;
    z-index: 2;
    margin-left: 2rem;

    @media (max-width: 768px) {
        max-width: 100%;
        margin-left: 0;
    }
`;

// Container da imagem
const ImageContainer = styled.div`
    max-width: 35%;
    z-index: 2;
    margin-right: -2rem;

    @media (max-width: 768px) {
        max-width: 80%;
        margin: 1.5rem 0;
    }
`;

// Estilo do título
const Title = styled.h1`
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`;

// Estilo do subtítulo
const Subtitle = styled.p`
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
    opacity: 0.9;

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`;

// Estilo do parágrafo
const Paragraph = styled.p`
    line-height: 1.6;
    opacity: 0.9;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

// Estilo do SVG (onda)
const WaveSVG = styled.svg`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    z-index: 1;
`;

// Estilo do container do vídeo
const VideoContainer = styled.div`
    max-width: 40%;
    z-index: 2;
    margin-left: 2rem;

    @media (max-width: 768px) {
        max-width: 100%;
        margin-left: 0;
    }

    video {
        width: 100%;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
`;

const Intro = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Detecting if dark mode is active on component mount
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        // Set initial state based on user's preference
        setIsDarkMode(mediaQuery.matches);

        // Listen for changes in the theme
        const handleChange = (e) => {
            setIsDarkMode(e.matches);
        };

        // Add event listener
        mediaQuery.addEventListener('change', handleChange);

        // Cleanup on component unmount
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <Container>
            <TextContainer>
                <Title>
                    Your Voice Matters. Don’t Let AI Drown It Out
                </Title>
                <Subtitle>
                    Take Control of Your Online Space.
                </Subtitle>

                {/* Imagem em telas pequenas */}
                <ImageContainer style={{ display: 'none' }}>
                    <img
                        src={astronautImage}
                        alt="Astronaut"
                        style={{ width: '100%', objectFit: 'contain' }}
                    />
                </ImageContainer>

                <Paragraph>
                    In a world where AI-driven bots are increasingly shaping online interactions, it’s hard to know who’s real and who’s not. Our platform empowers you to uncover the truth. By combining community-driven insights with advanced algorithms, we help you identify AI-managed accounts and ensure your online interactions are genuine.
                    To give users greater control, our system allows for profile blocking, making it easier to filter out suspicious accounts. Additionally, our website provides in-depth profile analysis, allowing users to search for accounts and view credibility evaluations, voting history, and relevant discussions.
                    Join us in creating a more transparent and trustworthy digital space—because the internet should be about real people, not bots.
                </Paragraph>
            </TextContainer>

            {/* Vídeo promocional */}
            <VideoContainer>
                <video controls autoPlay loop muted>
                    <source src={require('@site/static/videos/videoPromo.mp4').default} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </VideoContainer>


            {/* Wave SVG at the bottom */}
            <WaveSVG viewBox="0 0 500 150" preserveAspectRatio="none">
                <path
                    d="M0,100 C150,200 350,0 500,100 L500,150 L0,150 Z"
                    className="wave-path"
                />
            </WaveSVG>
        </Container>
    );
};

export default Intro;
