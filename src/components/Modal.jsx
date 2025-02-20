import React from 'react';
import { AiOutlineBook } from 'react-icons/ai';

const Modal = ({ show, close, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={close}>
          X
        </button>
        <div style={styles.content}>
          <AiOutlineBook size={40} color="#4CAF50" style={styles.icon} />
          <h2 style={styles.title}>Bons Estudos!</h2>
          <p style={styles.message}>
            Clique nos cards para aprender mais sobre cada tecnologia. Explore
            os links e comece sua jornada de aprendizagem.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: 'fadeIn 0.3s ease-out', // Efeito de transição
  },
  modal: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    minWidth: '300px',
    maxWidth: '500px',
    textAlign: 'center',
    position: 'relative',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    animation: 'scaleUp 0.3s ease-out', // Efeito de escala ao aparecer
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    color: '#333',
    cursor: 'pointer',
  },
  content: {
    marginTop: '20px',
  },
  icon: {
    marginBottom: '10px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  message: {
    fontSize: '16px',
    color: '#555',
    margin: '10px 0',
  },
};

export default Modal;
