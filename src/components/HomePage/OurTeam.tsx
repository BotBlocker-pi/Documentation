import React from 'react';
import AnaRitaPhoto from '../../images/Team/AnaRitaSilva.jpg';
import AngelaPhoto from '../../images/Team/AngelaRibeiro.jpg';
import JoaoCarlosPhoto from '../../images/Team/JoaoCarlos.jpg';
import JoaoViegasPhoto from '../../images/Team/JoaoViegas.jpg';
import HugoPhoto from '../../images/Team/HugoCastro.jpg';
import JoaoRafaelAlmeidaPhoto from '../../images/Team/JoaoRafaelAlmeida.jpg';
import VicentePhoto from '../../images/Team/VicenteBarros.jpg';

const OurTeam = () => {
    return (
        <div style={{ padding: '2.5rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            {/* Título "Our Team" */}
            <h1 style={{
                textAlign: 'center',
                marginBottom: '2rem',
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#556c98', // Cor fixa para "Our Team"
            }}>
                Our Team
            </h1>

            {/* Subtítulo "Members" */}
            <h2 style={{
                textAlign: 'center',
                marginBottom: '1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#556c98', // Cor fixa para "Members"
            }}>
                Members
            </h2>

            {/* Primeira linha com 5 cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                {[
                    { name: 'Ana Rita Silva', photo: AnaRitaPhoto, github: 'https://github.com/Rita-Silva04', email: 'aritafs@ua.pt' },
                    { name: 'Ângela Ribeiro', photo: AngelaPhoto, github: 'https://github.com/angelammaribeiro', email: 'angelammaribeiro@ua.pt' },
                    { name: 'João Carlos Leite', photo: JoaoCarlosPhoto, github: 'https://github.com/JotaCLS', email: 'joao.carlos.santos@ua.pt' },
                    { name: 'João Viegas', photo: JoaoViegasPhoto, github: 'https://github.com/joaoviegas11', email: 'joaoviegas11@ua.pt' },
                    { name: 'Hugo Castro', photo: HugoPhoto, github: 'https://github.com/hujuc', email: 'hugocastro@ua.pt' },
                ].sort((a, b) => a.name.localeCompare(b.name)).map((member, index) => (
                    <div key={index} style={{
                        border: '1px solid #ddd',
                        borderRadius: '0.5rem',
                        padding: '1.5rem',
                        textAlign: 'center',
                        height: '350px',
                        backgroundColor: 'white', // Fundo branco explicitamente
                    }}>
                        {/* Container para imagem circular */}
                        <div style={{
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            marginBottom: '2rem',
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '0 auto'
                        }}>
                            <img
                                src={member.photo}
                                alt={member.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: 'black' }}>{member.name}</h3>
                        <p style={{ marginBottom: '1rem', color: 'black' }}>{member.email}</p>
                        <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'var(--ifm-color-primary)', display: 'inline-block' }}
                        >
                            <img
                                src="https://img.icons8.com/ios-filled/50/000000/github.png"
                                alt="GitHub Icon"
                                style={{ width: '24px', height: '24px' }}
                            />
                        </a>
                    </div>
                ))}
            </div>

            {/* Subtítulo "Advisors" */}
            <h2 style={{
                textAlign: 'center',
                marginBottom: '1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#556c98', // Cor fixa para "Advisors"
            }}>
                Advisors
            </h2>

            {/* Segunda linha com 2 cards centralizados */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                {/* Card 6 - Joao Rafael Almeida */}
                <div style={{
                    border: '1px solid #ddd',
                    borderRadius: '0.5rem',
                    padding: '1.5rem',
                    textAlign: 'center',
                    width: '20%',
                    height: '350px',
                    backgroundColor: 'white', // Fundo branco explicitamente
                }}>
                    {/* Container para imagem circular */}
                    <div style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        marginBottom: '2rem',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 auto'
                    }}>
                        <img
                            src={JoaoRafaelAlmeidaPhoto}
                            alt="Joao Rafael Almeida"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                    <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: 'black' }}>Joao Rafael Almeida</h3>
                    <p style={{ marginBottom: '1rem', color: 'black' }}>joao.rafael.almeida@ua.pt</p>
                    <a
                        href="https://github.com/joaorafaelalmeida"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'var(--ifm-color-primary)', display: 'inline-block' }}
                    >
                        <img
                            src="https://img.icons8.com/ios-filled/50/000000/github.png"
                            alt="GitHub Icon"
                            style={{ width: '24px', height: '24px' }}
                        />
                    </a>
                </div>

                {/* Card 7 - Vicente */}
                <div style={{
                    border: '1px solid #ddd',
                    borderRadius: '0.5rem',
                    padding: '1.5rem',
                    textAlign: 'center',
                    width: '20%',
                    height: '350px',
                    backgroundColor: 'white', // Fundo branco explicitamente
                }}>
                    {/* Container para imagem circular */}
                    <div style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        marginBottom: '2rem',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 auto'
                    }}>
                        <img
                            src={VicentePhoto}
                            alt="Vicente Barros"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                    <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: 'black' }}>Vicente Barros</h3>
                    <p style={{ marginBottom: '1rem', color: 'black' }}>vicente.barros@example.com</p>
                    <a
                        href="https://github.com/v1centebarros"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'var(--ifm-color-primary)', display: 'inline-block' }}
                    >
                        <img
                            src="https://img.icons8.com/ios-filled/50/000000/github.png"
                            alt="GitHub Icon"
                            style={{ width: '24px', height: '24px' }}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
