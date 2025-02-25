// src/components/PdfViewer.js
import React from 'react';

const PdfViewer = ({ src, width, height }) => {
  return (
    <iframe
      src={src}
      width={width || '100%'}
      height={height || '600px'}
      style={{ border: 'none' }}
    >
      <p>Seu navegador não suporta iframes. <a href={src}>Clique aqui para visualizar o PDF.</a></p>
    </iframe>
  );
};

export default PdfViewer;