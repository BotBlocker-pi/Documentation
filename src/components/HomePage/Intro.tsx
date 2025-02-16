import React, { useEffect, useState } from 'react';
import astronautImage from '../../images/HomePage/bot.png'; // Adjust the path as needed

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
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'linear-gradient(to right, #556c98, #b3bedc 80%, #ffffff 100%)', // Gradient background
            padding: '3rem',
            position: 'relative',
            color: '#ffffff', // Text color updated
            minHeight: '60vh',
            overflow: 'hidden'
        }}>
            <div style={{maxWidth: '55%', zIndex: 2, marginLeft: '2rem'}}>
                <h1 style={{fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '1rem'}}>
                    See Through the Illusion: Detect AI Profiles in Seconds
                </h1>
                <p style={{fontSize: '1.3rem', marginBottom: '1.2rem', opacity: '0.9'}}>
                    Your Voice Matters. Don’t Let AI Drown It Out.
                </p>
                <p style={{lineHeight: '1.6', opacity: '0.9'}}>
                    In a world where AI-driven bots are increasingly shaping online interactions, it’s hard to know
                    who’s real and who’s not. Our platform empowers you to uncover the truth. By combining
                    community-driven insights with advanced algorithms, we help you identify AI-managed accounts and
                    ensure your online interactions are genuine. Join us in creating a more transparent and trustworthy
                    digital space—because the internet should be about real people, not bots.
                </p>
            </div>

            <div style={{maxWidth: '35%', zIndex: 2, marginRight: '-2rem'}}>
                <img
                    src={astronautImage}
                    alt="Astronaut"
                    style={{width: '100%', objectFit: 'contain'}}
                />
            </div>

            {/* Wave SVG at the bottom */}
            <svg
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '120px',
                    zIndex: 1
                }}
            >
                <path
                    d="M0,100 C150,200 350,0 500,100 L500,150 L0,150 Z"
                    className="wave-path" // Adiciona a classe aqui
                />
            </svg>
        </div>
    );
};

export default Intro;
