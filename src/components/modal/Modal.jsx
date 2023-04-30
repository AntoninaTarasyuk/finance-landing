import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

function Modal(props) {
  const { onModalClose, children } = props;

  const handleKeyDown = useCallback((event) => {
    if (event.code === 'Escape') {
      props.onModalClose();
    }
  }, [props]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onModalClose();
    }
  };

  return createPortal(
    <div className='modal-overlay' onClick={handleBackdropClick}>
      <div className='modal-window'>
        <button className='modal-close-btn' type='button' onClick={onModalClose} aria-label='Modal window close button'>
          <svg viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M23.733 10.304l-1.504-1.504-5.963 5.963-5.963-5.963-1.504 1.504 5.963 5.963-5.963 5.963 1.504 1.504 5.963-5.963 5.963 5.963 1.504-1.504-5.963-5.963 5.963-5.963z' fill='currentColor' />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    modalRoot,
  );
}

export default Modal;
