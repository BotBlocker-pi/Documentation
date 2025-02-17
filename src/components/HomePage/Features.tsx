import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faUsers, faRocket } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap', // Permite que os cards quebrem para a próxima linha
            justifyContent: 'center', // Centraliza os cards na tela
            alignItems: 'center',
            padding: '2rem 1rem', // Adiciona padding lateral de 1rem
            borderRadius: '1rem',
            margin: '2rem 0',
            gap: '1rem', // Adiciona espaçamento entre os cards
            maxWidth: '1200px', // Limita a largura máxima do contêiner
            marginLeft: 'auto', // Centraliza o contêiner na tela
            marginRight: 'auto', // Centraliza o contêiner na tela
        }}>
            {/* Card 1: Trust the Internet Again */}
            <div style={{
                background: '#ffffff',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                width: '30%',
                minWidth: '250px', // Define uma largura mínima para os cards
                flex: '1 1 30%', // Permite que os cards cresçam e encolham
            }}>
                <FontAwesomeIcon icon={faShieldAlt} style={{ fontSize: '2rem', color: '#556c98', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2d3748', marginBottom: '1rem' }}>
                    Trust the Internet Again
                </h3>
                <p style={{ color: '#4a5568', lineHeight: '1.5' }}>
                    Our platform helps you identify AI-driven accounts, ensuring your online interactions are genuine and trustworthy.
                </p>
            </div>

            {/* Card 2: Community-Based Ratings */}
            <div style={{
                background: '#ffffff',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                width: '30%',
                minWidth: '250px',
                flex: '1 1 30%',
            }}>
                <FontAwesomeIcon icon={faUsers} style={{ fontSize: '2rem', color: '#556c98', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2d3748', marginBottom: '1rem' }}>
                    Community-Based Ratings
                </h3>
                <p style={{ color: '#4a5568', lineHeight: '1.5' }}>
                    Leverage the power of community insights to detect and flag suspicious accounts, making the internet safer for everyone.
                </p>
            </div>

            {/* Card 3: Fast, Easy to Use & Free */}
            <div style={{
                background: '#ffffff',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                width: '30%',
                minWidth: '250px',
                flex: '1 1 30%',
            }}>
                <FontAwesomeIcon icon={faRocket} style={{ fontSize: '2rem', color: '#556c98', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2d3748', marginBottom: '1rem' }}>
                    Fast, Easy to Use & Free
                </h3>
                <p style={{ color: '#4a5568', lineHeight: '1.5' }}>
                    Just enter a username and get instant results. Our platform is designed to be simple, fast, and accessible to everyone.
                </p>
            </div>
        </div>
    );
};

export default Features;