import React, { useState } from 'react';
import Layout from '@theme/Layout';

function Home() {
  const [message, setMessage] = useState('');

  const showMessage = () => {
    setMessage('Thank you for visiting BotSentinel!');
  };

  return (
    <Layout title="Home" description="BotSentinel Home Page">
      <div className="container">
        <h1>Welcome to BotSentinel</h1>
        <p>This is a custom homepage built with React and Docusaurus.</p>
        
        {/* Botão interativo */}
        <button 
          onClick={showMessage} 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#2c3e50', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Click Me
        </button>

        {/* Exibe a mensagem quando o botão é clicado */}
        {message && (
          <p style={{ marginTop: '20px', color: '#2c3e50', fontWeight: 'bold' }}>
            {message}
          </p>
        )}
      </div>
    </Layout>
  );
}

export default Home;